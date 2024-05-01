import React from "react";
import styled from "@emotion/styled";
import SlideCard from "./SlideCard.jsx";
import Image from "../../elements/BackgroundImg.jsx";

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  max-height: 800px;
  display: flex;
  color: inherit;
`;

export default function Slide({ block, section }) {
  const sectionBackgroundColor = section.backgroundColor?.value;
  return (
    <Wrapper>
      {block?.backgroundImage?.file?.url && (
        <Image src={block?.backgroundImage?.file?.url} />
      )}
      {block?.cards?.map((card, index) => (
        <SlideCard key={index} card={card} color={sectionBackgroundColor} />
      ))}
    </Wrapper>
  );
}
