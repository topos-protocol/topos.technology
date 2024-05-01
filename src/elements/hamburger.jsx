import React, { useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: inline-block;
  height: 28px;
  margin-right: 29px;

  a.main-nav-toggle {
    display: block;
    width: 28px;
    height: 16px;
    position: absolute;

    &:after,
    &:before {
      content: "";
      position: absolute;
      top: 0;
      height: 0;
      border-bottom: 3px solid
        ${(props) => props.color};
      width: 100%;
      left: 0;
      right: 0;
      transition: all ease-out 0.3s;
    }

    &:after {
      top: 100%;
    }

    i {
      display: block;
      text-indent: 100%;
      overflow: hidden;
      white-space: nowrap;
      height: 3px;
      background-color: ${(props) => props.color};
      width: 100%;
      position: absolute;
      top: 50%;
      transition: all ease-out 0.3s;
    }

    &.active-menu {
      animation: fadeOutIn 0.6s ease-out;

      &:after {
        transform: rotate(-45deg);
        transform-origin: center;
        top: 50%;
      }

      &:before {
        transform: rotate(45deg);
        transform-origin: center;
        top: 50%;
      }

      i {
        opacity: 0;
      }
    }
  }

  .inactive-menu {
    animation: fadeInOut 0.6s ease-out;
  }

  @keyframes fadeOutIn {
    0% {
      opacity: 1;
    }
    40%, 60% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeInOut {
    0% {
      opacity: 1;
    }
    40%, 60% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Hamburger = ({ isActive }) => {
  return (
    <Wrapper color={isActive ? 'var(--page-theme-text-color, #000)' : 'var(--current-section-text-color, #000)'}>
      <a
        className={`main-nav-toggle ${isActive ? "active-menu" : "inactive-menu"}`}
        href="#main-nav"
      >
        <i>Menu</i>
      </a>
    </Wrapper>
  );
};

export default Hamburger;
