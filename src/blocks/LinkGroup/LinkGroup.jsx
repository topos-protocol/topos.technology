import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .linkContainer {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  .arrow {
    transform-origin: 0;
    margin-right: 8px; /* Space between arrow and link text */
    transition: transform 0.2s ease-out; /* Smooth transition for hover effect */
  }

  .linkContainer:hover .arrow {
    transform: scaleX(1.2); /* Scale arrow up horizontally on hover */
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center; /* Align arrow and text horizontally */
  }
`;

export default function LinkGroup({ block, section }) {
  const sectionTextColor = section.textColor?.value;
  return (
    <Wrapper>
      {block.links?.map((link, index) => {
        return <Link to={link.buttonUrl} key={index} className="linkContainer">
          <span className="arrow">
            {/* Inline SVG for the arrow */}
            <svg
              width="25"
              height="13"
              viewBox="0 0 25 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.4807 0.373322L24.1165 6.43568L23.3841 7.11655L17.7483 1.05419L18.4807 0.373322Z"
                fill={sectionTextColor}
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.4143 6.70711L18.3504 12.7709L17.6433 12.0638L23.7072 6L24.4143 6.70711Z"
                fill={sectionTextColor}
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.455566 6.18066H23.4556V7.18066H0.455566V6.18066Z"
                fill={sectionTextColor}
              />
            </svg>
          </span>
          {link.buttonText}
        </Link>
      })}
    </Wrapper>
  );
}
