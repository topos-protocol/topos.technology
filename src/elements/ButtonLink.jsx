import React from "react";
import styled from "@emotion/styled";
import ThemedAniLink from "../elements/ThemeAnilink";

const ButtonBase = styled.div`
  font-weight: 400;
  padding: 0.515rem 1rem 0.275rem 1rem;
  border-radius: 0.7rem;
  cursor: pointer;
  width: fit-content;
  transition: all 0.3s ease;
  display: inline-block;
`;

export default function Button({ link, text, color, hoverColor, darkenBackground }) {
  const TheButton = styled(ButtonBase)`
    border: 1px ${color} solid;
    color: ${color};
    position: relative;
    overflow: hidden;
    transition: all 0.2 ease delay 0.5s;
    margin-right: 0.5rem;
    ${ darkenBackground && "background-color: rgba(0, 0, 0, 0.5);"}
    &:hover {
      ${ darkenBackground && "background-color: rgba(0, 0, 0, 0.0);"}
      color: ${hoverColor || "var(--current-section-background-color, #000)"};
      &::before {
        -webkit-transform: scale(12);
        transform: scale(12);
        -webkit-transition: border-radius 0.7s 0.7s, -webkit-transform 0.7s;
        transition: border-radius 0.7s 0.7s, -webkit-transform 0.7s;
        transition: transform 0.7s, border-radius 0.7s 0.7s;
        transition: transform 0.7s, border-radius 0.7s 0.7s,
          -webkit-transform 0.7s;
      }

      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }

    &::before {
      content: "";
      position: absolute;
      background-color: ${color};
      width: 30px;
      height: 30px;
      border-radius: 50%;
      z-index: -1;
      top: 0px;
      left: calc(50% - 15px);
      -webkit-transform: scale(0);
      transform: scale(0);
      transition: transform 0.7s, border-radius 0.7s;
    }
  `;

  if (link?.includes("http")) {
    return (
      <a href={link} >
        <TheButton target="_blank">
          {text}
        </TheButton>
      </a>
    );
  }

  return (
    <ThemedAniLink to={link}>
      <TheButton>{text}</TheButton>
    </ThemedAniLink>
  );
}
