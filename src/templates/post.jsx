import React from "react";
import { createGlobalStyle } from "styled-components";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ParallaxProvider } from "react-scroll-parallax";
import PostPreview from "../blocks/PostPreview/PostPreview.jsx";
import { SectionWrapper, ContentWrapper } from "./Section.jsx";
import Footer from '../layouts/Footer';
import PostBlockRenderer from "../post-blocks/PostBlockRenderer.jsx";
import PageMetaSEO from "../utilities/PageMetaSEO.jsx";
import styled from "@emotion/styled";

const FeaturedImage = styled.img`
  width: 100%;
  margin-top: 4rem;
`

const PostTemplate = ({ pageContext }) => {
  const { post, websiteSetting } = pageContext;

  const GlobalStyle = createGlobalStyle`
    :root {
      --page-theme-color: var(--primary-color-3);
      --primary-menu-hover-color: var(--primary-color-4);
      --secondary-menu-hover-color: var(--primary-color-4);
    }

    body {
      background-color: #f6f6f6;
    }
  `;

  return (
    <>
      <PageMetaSEO 
        title={post?.postTitle}
        imageUrl={post?.featuredImage?.file?.url}
        description={post?.description}
        websiteTitle={websiteSetting?.title || "Toposware"}
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
          <article>
            <SectionWrapper>
              <ContentWrapper>
                {post?.featuredImage?.file?.url && <FeaturedImage src={post?.featuredImage?.file?.url} width="100%" />}
                <PostPreview block={pageContext} />
                {post?.postBlocks?.map((postBlock, index) => {
                  return <PostBlockRenderer key={index} postBlock={postBlock} />;
                })}
                <Footer />
              </ContentWrapper>
            </SectionWrapper>
          </article>
        </ReactLenis>
      </ParallaxProvider>
    </>
  );
};

export default PostTemplate;
