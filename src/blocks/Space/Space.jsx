import React from "react";
import styled from "@emotion/styled";

export default function Space({ block }) {
  const Wrapper = styled.div`
    width: 100%;
    display: block;
    height: ${({ size }) => {
      // different sizes
      // xs, sm, md, lg, xl
      switch (size) {
        case "xs":
          return "1.5rem";
        case "sm":
          return "3.15rem";
        case "md":
          return "6.25rem";
        case "lg":
          return "9.5rem";
        case "xl":
          return "14rem";
        default:
          return "6.25rem";
      }
    }};
  `;

  return <Wrapper size={block.size}></Wrapper>;
}
