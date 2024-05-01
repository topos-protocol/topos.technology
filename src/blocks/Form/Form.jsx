import React from "react";
import styled from "@emotion/styled";
import TextField from "./fields/TextField.jsx";
import TextAreaField from "./fields/TextAreaField.jsx";
import Button from "../../elements/ButtonLink.jsx";

const Wrapper = styled.div`
  ${({ noPadding }) => noPadding !== true && `padding: 4rem 0`};

  .contactForm {
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
  }

  a {
    align-self: flex-start;
  }

  .input-wrapper {
    position: relative;
    font-size: 2.5rem;

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }

  }

  /* Continue using the previous @keyframes blink definition */
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
  
  .blinking-cursor {
    display: inline-block;
    width: 1.4rem;
    height: 2.5px;
    margin-bottom: -0.35rem;
    background-color: currentColor;
    animation: blink 1.5s infinite;

    @media (max-width: 480px) {
      width: 0.8rem;
      height: 2px;
      margin-bottom: -0.2rem;
    }

  }

  .floating-placeholder {
    position: absolute;
    left: 0;
    top: 0rem;
    color: inherit;
    font-size: inherit;
    pointer-events: none;
  }
`;

export const InputWrapper = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  grid-gap: 0.15rem;

  label {
    color: inherit;
  }
`;

export default function BlockForm({ block, section, noPadding }) {
  const sectionTextColor = section?.textColor?.value;
  const sectionBackgroundColor = section?.backgroundColor?.value;

  return (
    <Wrapper noPadding={noPadding}>
      <form className="contactForm">
        {block.fields.map((field, index) => {
          switch (field.type) {
            case "email":
            case "text":
              return <TextField key={index} field={field}  />;
            case "textarea":
              return <TextAreaField key={index} field={field} />;
            default:
              return null;
          }
        })}
        {
        block?.hideSubmitButton !== true && <Button 
          link={block.submitLink} 
          text={block.submitButtonText} 
          color={sectionTextColor} 
          hoverColor={sectionBackgroundColor} 
        />
        }
      </form>
    </Wrapper>
  );
}

