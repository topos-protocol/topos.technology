import './src/styles/reset.scss';

// The main CSS file 
import './src/styles/global.scss';

import './src/styles/font-faces.scss';

// DOC: We're using CSS variables instead of Javascript variables for better portability
import './src/styles/css-variables.scss';

import React from 'react';

import { WebsiteSettingProvider } from './src/providers/WebsiteProvider.js';

import Navigation from './src/layouts/Navigation.jsx';

// primary purpose of this wrapper is to avoid the re-rendering by 
// "gatsby-plugin-transition-link" where its transform breaks
// the basic behaviour of position: fixed 
export const wrapPageElement = ({ element }) => {
  const websiteSetting = element.props?.pageContext?.websiteSetting || {};

  return (
    <WebsiteSettingProvider websiteSetting={websiteSetting}>
      <Navigation />
      {element}
    </WebsiteSettingProvider>
  );
};

