import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  margin-bottom: 1.25rem;

  ${({ layout }) => {
    if (layout === "row") return "grid-template-columns: repeat(2, 1fr);";
    if (layout === "column") return "100%";
  }};  

  img {
    object-fit: cover;
  }
`;

export default function PostImage({ postBlock }) {
  return (
    <Content layout={postBlock?.layout}>
      {postBlock?.images?.map((image, index) => {
        return <img src={image?.file?.url} key={index} width="100%" />;
      })}
    </Content>
  );
}
