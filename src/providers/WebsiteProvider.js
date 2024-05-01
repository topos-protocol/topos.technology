import React, { useState, useEffect } from 'react';

export const WebsiteSettingContext = React.createContext();

export const WebsiteSettingProvider = ({ children, websiteSetting }) => {
  const [settings, setSettings] = useState(websiteSetting || {});
  const [menuOpenLevel, setMenuOpenLevel] = useState(0);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const updateState = (newState) => {
    setSettings((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <WebsiteSettingContext.Provider value={{ 
      settings, 
      updateState,
      menuOpenLevel, 
      setMenuOpenLevel,
      expandedMenu, 
      setExpandedMenu 
    }}>
      {children}
    </WebsiteSettingContext.Provider>
  );
};

