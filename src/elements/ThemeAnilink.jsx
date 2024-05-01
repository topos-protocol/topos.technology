import React, { useState, useEffect } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const ThemedAniLink = ({ to, children, openNewTab, onClick }) => {
  const [themeColor, setThemeColor] = useState("#2500ff"); // Default color

  useEffect(() => {
    // Get the theme color from CSS variable --page-theme-color
    const rootStyle = getComputedStyle(document.documentElement);
    const pageThemeColor = rootStyle
      .getPropertyValue("--page-theme-color")
      .trim();
    setThemeColor(pageThemeColor);
  }, []); // Empty array means this effect only runs once on mount

  if (!to) {
    return <>{children}</>;
  }

  if (to.startsWith("http")) {
    return (
      <a href={to} target={openNewTab ? '_blank' : ''} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <AniLink paintDrip to={to} hex={themeColor} duration={1} onClick={onClick}>
      {children}
    </AniLink>
  );
};

export default ThemedAniLink;
