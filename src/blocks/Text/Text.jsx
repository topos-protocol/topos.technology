import React from "react";
import RichText from "../../elements/RichText";
import styled from "@emotion/styled";
import { useParallax } from "react-scroll-parallax";

const Wrapper = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: var(--line-height-3);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 5rem 0rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  h4 {
    font-size: clamp(1.25rem, 15vw, 1.5rem);
    line-height: var(--line-height-2);
    font-weight: 700;
    margin-bottom: clamp(0.8rem, 10vh, 1rem);
  }

  p {
    margin-bottom: 1rem;
  }
`;

// it can edit in
// heading h4 or h5 and plain text

export default function BlockText({ block, section }) {
  const firstColumnRef = useParallax({
    opacity: [0, 4],
  });

  const secondColumnRef = useParallax({
    opacity: [0, 4],
  });

  return (
    <Wrapper>
      <div ref={firstColumnRef.ref}>
        <RichText element={block.firstColumn} />
      </div>
      <div ref={secondColumnRef.ref}>
        <RichText element={block.secondColumn} />
      </div>
    </Wrapper>
  );
}
