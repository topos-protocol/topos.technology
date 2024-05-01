import React from "react";
import RichText from "../../elements/RichText.jsx";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 240px 80px 80px 80px;
  background-color: ${(props) => props.sectionBackgroundColor};
  width: 500px;

  .cardTitle {
    font-size: 4.7rem;
    line-height: var(--line-height-1);
    margin-bottom: 140px;
    .superTitle {
      color: var(--primary-color-2);
      font-size: 2.5rem;
    }
    p {
      font-size: 2.5rem;
      overflow-wrap: normal;
      word-break: normal;
    }
  }
  
  .cardText {
    font-size: 1.125rem;
    line-height: var(--line-height-4);
  }

  @media (max-width: 480px) {
    width: 90vw;
  }
`;

export default function Slide({ card }) {
  return (
    <Wrapper>
      <div className="cardTextContainer">
        <div className="cardTitle">
          <div className="superTitle">
            <RichText element={card.supertitle} />
          </div>
          <RichText element={card.title} />
        </div>
        <div className="cardText">
          <RichText element={card.text} />
        </div>
      </div>
    </Wrapper>
  );
}
