import React from "react";
import RichText from "../../elements/RichText.jsx";
import styled from "@emotion/styled";
import { useParallax } from "react-scroll-parallax";

const Content = styled.div`
  font-size: 1rem;
  margin-bottom: clamp(5.5rem, 20vh, 5rem) !important;
  padding: 2.5rem 0px;
  h3 {
    font-size: clamp(1.8rem, 6vw, 2.4rem);
    line-height: var(--line-height-2);
    font-weight: 700;
    margin-bottom: clamp(0.8rem, 10vh, 1rem);
  }

  h4 {
    font-size: clamp(1.4rem, 6vw, 1.9rem);
    line-height: var(--line-height-2);
    font-weight: 700;
    margin-bottom: clamp(0.8rem, 10vh, 1rem);
  }

  h5 {
    font-size: clamp(1.15rem, 4vw, 1.4rem);
    line-height: var(--line-height-2);
    font-weight: 700;
    margin-bottom: clamp(0.8rem, 10vh, 1rem);
  }
`;

export default function FullWidthText({ block }) {
  const contentRef = useParallax({
    opacity: [0, 2.5],
  });

  return (
    <Content ref={contentRef.ref}>
      <RichText element={block.content} />
    </Content>
  );
}
