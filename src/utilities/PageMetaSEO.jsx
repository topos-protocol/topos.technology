import React, { useContext } from "react";
import { Helmet } from "react-helmet"
import { WebsiteSettingContext } from "../providers/WebsiteProvider";

export default function PageMetaSEO({ lang = 'en', imageUrl, title, websiteTitle, description }) {
  const websiteSettings = useContext(WebsiteSettingContext);
 
  const defaultSeoDescription = websiteSettings?.settings?.defaultSeoDescription || '';
  const defaultSeoImage = websiteSettings?.settings?.defaultSeoImage?.file?.url || '';

  return (<Helmet
    htmlAttributes={{ lang }}
    title={`${title} | ${websiteTitle}`}
    meta={[
      {
        name: `description`,
        content: description || defaultSeoDescription,
      },
      // For SEO
      {
        name: `og:image`,
        content: imageUrl || defaultSeoImage,
      },
      {
        name: `og:title`,
        content: title,
      },
      {
        name: `og:description`,
        content: description || defaultSeoDescription,
      },
      {
        name: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: `@toposware`,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: description || defaultSeoDescription,
      },
    ]}
  />);

}

