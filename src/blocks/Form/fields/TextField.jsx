import React, { useState } from "react";
import styled from "@emotion/styled";
import { InputWrapper } from "../Form";

const Input = styled.input`
  background-color: transparent;
  border: none;
  color: inherit;
  outline: none;
  font-size: inherit;
  font-family: inherit;
  padding: 0 0;
  font-weight: 700;
  width: 100%;
  line-height: 1.15;
  -webkit-appearance: none;
`;

export default function TextField({ field }) {
  const { placeholder } = field;
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const showPlaceholder = !isFocused && value === "";

  return (
    <InputWrapper>
      {field.label && <label>{field.label}</label>}
      <div className="input-wrapper">
        <Input
          type={field.type}
          value={value}
          required={field.required}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            paddingLeft: showPlaceholder
              ? `${placeholder?.length * 0.6}ch`
              : "0",
          }}
        />
        {showPlaceholder && (
          <span className="floating-placeholder">
            {placeholder}
            <span className="blinking-cursor"></span>
          </span>
        )}
      </div>
    </InputWrapper>
  );
}
