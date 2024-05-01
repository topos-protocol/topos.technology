import React from "react";
import styled from "@emotion/styled";
import Button from "../../elements/ButtonLink.jsx";

const Wrapper = styled.div`
  font-size: 0.875rem;
  line-height: var(--line-height-2);
  display: flex;
  grid-gap: 2.5rem;
  padding: 6.25rem 0px 6.25rem 0px;
  @media (max-width: 1124px) {
    overflow: auto;
  }
  @media (max-width: 768px) {
    padding: 7.5rem 0px 5rem 0px;
  }

  .pagePreview {
    flex-shrink: 0;
    width: 300px;
  }

  @media (max-width: 480px) {
    padding: 6.25rem 0px 4.5rem 0px;
  }

  .pageData {
    margin-bottom: 2.25rem;
    display: flex;
    flex-direction: column;
    grid-gap: 2px;
  }

  .pageTitle {
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 2.5rem;
  }
`;

export default function PageList({ block, section }) {
  const sectionTextColor = section.textColor?.value;
  const sectionBackgroundColor = section.backgroundColor?.value;

  return (
    <Wrapper>
      {block.pages?.map((page, index) => {
        return (
          <div key={index} className="pagePreview">
            <div className="pageData">
              <small>{page.supertitle}</small>
            </div>
            <div className="pageTitle">
              <h2>{page.title}</h2>
            </div>
            <Button
              link={`/${page.slug}`}
              text={"Read More"}
              color={sectionTextColor}
              hoverColor={sectionBackgroundColor}
            />
          </div>
        );
      })}
    </Wrapper>
  );
}
