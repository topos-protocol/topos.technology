import path from 'path';
import contentful from 'contentful';

if (!process.env.WEBSITE_SETTING_ENTRY_ID) {
  throw new Error('WEBSITE_SETTING_ENTRY_ID is not set. Grab the entry ID from Contentful in a websiteEntry and set it as an environment variable.');
}

const client = contentful.createClient({
  space: process.env.TOPOS_CONTENTFUL_SPACE_ID,
  accessToken: process.env.TOPOS_CONTENTFUL_ACCESS_TOKEN,
  environment: 'master', // or your environment ID
});

export const createPages = async ({ actions }) => {
  const websiteSettingEntry = await client.getEntry(process.env.WEBSITE_SETTING_ENTRY_ID, {
    include: 2,
  });

  if (!websiteSettingEntry) {
    throw new Error('No website setting found (id:' + process.env.WEBSITE_SETTING_ENTRY_ID + '). Make sure the WEBSITE_SETTING_ENTRY_ID is set correctly.');
  }

  const websiteSetting = cleanAndFlattenEntry(websiteSettingEntry)

  const pages = await client.getEntries({
    content_type: 'page', 
    select: 'fields',
    include: 10,
  })
  
  const { createPage } = actions;

  /*
    Dynamically creating pages from Contentful data
  */
  pages.items.forEach((page) => {
    const node = cleanAndFlattenEntry(page);

    let slug = node.slug;

    // If the slug is empty or 'home', set it as a "Home" page
    // by passing a blank string as slug
    if (node._id === websiteSetting.homePage?._id) {
      slug = '';
    }

    createPage({
      path: `/${slug}`, 
      component: path.resolve('./src/templates/page.jsx'),
      context: {
        websiteSetting,
        slug: node.slug,
        title: node.title,
        description: node.description,
        sections: node.sections || [],
        themeTextColor: node.themeTextColor,
        themeColor: node.themeColor?.value,
        primaryMenuHoverColor: node.primaryMenuHoverColor?.value,
        pageFooterColor: node.pageFooterColor?.value,
        pageMeta: node.pageMeta,
      },
    });
  });

  /*
    Dynamically creating posts from Contentful data
  */
  const posts = await client.getEntries({
    content_type: 'post', 
    include: 10,
  })

  posts.items.forEach((post) => {
    const node = cleanAndFlattenEntry(post);

    let slug = node.slug;

    createPage({
      path: `/article/${slug}`, 
      component: path.resolve('./src/templates/post.jsx'),
      context: {
        websiteSetting,
        post: node,
      },
    });
  });
};

/*
 *
 * Format the Block data from Contentful for the frontend renderer to consume
 * - We remove sys and metadata from the blocks
 * - We flatten the fields object
 * - We add createdAt and updatedAt
 *
 */
const cleanAndFlattenEntry = (entry) => {
  const { sys, metadata, fields, ...rest } = entry;

  const __typename = sys?.contentType?.sys.id;

  let cleanedEntry = { ...rest, __typename };
  
  cleanedEntry._id = sys?.id;

  if (__typename === 'post') {
    cleanedEntry.createdAt = entry.sys.createdAt;
    cleanedEntry.updatedAt = entry.sys.updatedAt;
    delete cleanedEntry.content;
  }

  Object.keys(fields).forEach(key => {
    if (Array.isArray(fields[key])) {
      cleanedEntry[key] = fields[key].map(item => {
        if (item.sys && item.fields) {
          return cleanAndFlattenEntry(item);
        }
        return item;
      });
    } else if (fields[key] && fields[key].sys && fields[key].fields) {
      cleanedEntry[key] = cleanAndFlattenEntry(fields[key]);
    } else {
      cleanedEntry[key] = fields[key];
    }
  });

  return cleanedEntry;
};