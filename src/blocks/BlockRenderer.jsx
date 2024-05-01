
import React from 'react';
import BlockHero from './Hero/Hero.jsx';
import FullWidthText from './FullWidthText/FullWidthText.jsx';
import BlockText from './Text/Text.jsx';
import PostList from './PostList/PostList.jsx';
import PageList from './PageList/PageList.jsx';
import Space from './Space/Space.jsx';
import BlockForm from './Form/Form.jsx';
import Slide from './Slide/Slide.jsx';
import LinkGroup from './LinkGroup/LinkGroup.jsx';

import BigLogo from './HardCoded/BigLogo.jsx';
import PostPreview from './PostPreview/PostPreview.jsx';

export default function BlockRenderer({ block, section }) {
  switch (block.__typename) {
    case 'blockHero':
      return <BlockHero block={block} section={section}  />;
    case 'blockFullWidthText':
      return <FullWidthText block={block} section={section} />;
    case 'blockText':
      return <BlockText block={block} section={section} />;
    case 'blockPostList':
      return <PostList block={block} section={section} />;
    case 'blockPageList':
      return <PageList block={block} section={section} />;
    case 'blockSpace':
      return <Space block={block} section={section} />;
    case 'blockPostPreview':
      return <PostPreview block={block} section={section} />;
    case 'blockForm':
      return <BlockForm block={block} section={section} />;
    case 'blockSlide':
      return <Slide block={block} section={section} />;
    case 'blockLinkGroup':
      return <LinkGroup block={block} section={section} />;

    /*
     * Hardcoded blocks without logics
     */
    case 'blockHardCoded':
      switch (block.blockName) {
        case 'BigLogo':
          return <BigLogo block={block} section={section} />;
        default:
          return null;
      }
    default:
      return null;
  }
};