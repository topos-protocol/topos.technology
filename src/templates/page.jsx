import React, { useEffect } from "react";
import Section from "./Section.jsx";
import { createGlobalStyle } from "styled-components";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ParallaxProvider } from "react-scroll-parallax";
import PageMetaSEO from "../utilities/PageMetaSEO.jsx";

const PageTemplate = ({ pageContext }) => {
  const { sections, websiteSetting } = pageContext;

  const GlobalStyle = createGlobalStyle`
    :root {
      --page-theme-color: ${pageContext.themeColor};
      --page-theme-text-color: ${() => {
      switch (pageContext.themeTextColor) {
        case "primary":
          return "var(--primary-color-1)";
        case "dark":
          return "var(--primary-color-2)";
        case "light":
          return "var(--primary-color-3)";
        default:
          return "var(--primary-color-2)";
      }
    }};
      --page-select-color: var(--page-theme-color, var(--primary-color-2));
      --page-select-text-color: var(--page-theme-text-color, var(--primary-color-3));

      ${pageContext.primaryMenuHoverColor && `--primary-menu-hover-color: ${pageContext.primaryMenuHoverColor};`}
      ${pageContext.primaryMenuHoverColor && `--secondary-menu-hover-color: ${pageContext.primaryMenuHoverColor};`}
      ${pageContext.pageFooterColor && `--page-footer-color: ${pageContext.pageFooterColor};`
    }
  `;

  useEffect(() => {
    setTimeout(() => {
      const elements = document.querySelectorAll('.tl-wrapper');

      elements.forEach(function (element) {
        let currentStyle = element.getAttribute('style');
        let newStyle = (currentStyle || '').replace(/transform:[^;]+;?/g, '');
        if (newStyle) {
          element.setAttribute('style', newStyle);
        }
      });
    }, 1000)
  }, []);

  return (
    <>
      <PageMetaSEO 
        title={pageContext?.title}
        imageUrl={pageContext.featuredImage?.file?.url}
        websiteTitle={websiteSetting?.title || "Toposware"}
        description={pageContext?.description}
        lang={pageContext?.language || "en"}
      />
      <GlobalStyle />
      <ParallaxProvider>
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.5,
            smoothWheel: true,
            smoothTouch: true,
          }}
        >
          {sections?.map((section, key) => (
            <Section
              key={key}
              section={section}
              isLastSection={sections?.length - 1 === key}
            />
          ))}
        </ReactLenis>
      </ParallaxProvider>
    </>
  );
};

export default PageTemplate;
