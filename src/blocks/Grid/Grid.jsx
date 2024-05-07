import React from "react";
import styled from "@emotion/styled";
import SlideCard from "../Slide/SlideCard.jsx";

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr); /* Adjust column count */
  gap: 20px; /* Adjust gap between grid items */
  background: url('${props => props.background}'); /* Set background */
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(468px, 1fr)); /* Adjust for smaller screens */
  }
  /* Add any additional styling as needed */
`;

export default function Grid({ block, section }) {
  console.log("GRID");
  console.log(block?.cards);
  console.log(block?.columns);
  console.log(block?.backgroundImage); 
  const sectionBackgroundColor = section.backgroundColor?.value;
  console.log(sectionBackgroundColor); 
  return (
    <Wrapper columns={block?.columns || 2} background={block?.backgroundImage?.file?.url}>
      {block?.cards?.map((card, index) => (
        <SlideCard key={index} card={card} color={sectionBackgroundColor} />
      ))}
    </Wrapper>
  );
}

