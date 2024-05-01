import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import styled from "styled-components";

const CustomLink = styled.a`
  display: inline;
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    color: inherit;
    background-color: currentColor;
    opacity: 1;
    transition: transform 300ms ease;
    transform: scaleX(1);
    transform-origin: 0%;
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(0);
  }
`;

const customRenderers = {
  [INLINES.HYPERLINK]: ({ data, content }) => (
    <CustomLink href={data.uri} target="_blank" rel="noopener noreferrer">
      {content && content.map(({ value }) => value)}
    </CustomLink>
  ),
};

export default function ContentfulText({ element }) {
  if (!element || !element.content) {
    return null;
  }

  return documentToReactComponents(element, { renderNode: customRenderers });
}
