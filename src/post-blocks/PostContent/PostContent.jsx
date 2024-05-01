import React from "react";
import RichText from "../../elements/RichText.jsx";
import styled from "@emotion/styled";

const Content = styled.div`
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: clamp(5.5rem, 20vh, 5rem) !important;
  padding: 2.5rem 0px;

  p {
    margin-bottom: clamp(1.5rem, 10vh, 2rem);
    font-weight: 300;
    line-height: var(--line-height-reading);
  }

  h2 {
    font-size: clamp(3.25rem, 15vw, 3.25rem);
    line-height: var(--line-height-2);
    font-weight: 700;
    margin-bottom: clamp(0.8rem, 10vh, 1rem);
  }

  h3 {
    font-size: clamp(2rem, 15vw, 2.5rem);
    line-height: var(--line-height-2);
    font-weight: 700;
    margin-bottom: clamp(0.8rem, 10vh, 1rem);
  }

  h4 {
    font-size: clamp(1.5rem, 15vw, 2rem);
    line-height: var(--line-height-2);
    font-weight: 700;
    margin-bottom: clamp(0.8rem, 10vh, 1rem);
  }
  
  h5 {
    font-size: clamp(1.15rem, 15vw, 1.5rem);
    line-height: var(--line-height-2);
    font-weight: 700;
    margin-bottom: clamp(0.8rem, 10vh, 1rem);
  }
`;

export default function PostContent({ postBlock }) {
  return (
    <Content>
      <RichText element={postBlock.content} />
    </Content>
  );
}
