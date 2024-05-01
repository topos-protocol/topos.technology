import React, { useContext } from "react";
import styled from "@emotion/styled";
import ToposLogo from "../elements/ToposLogo";
import Menu from "./Menu";
import ThemedAniLink from "../elements/ThemeAnilink";
import { WebsiteSettingContext } from "../providers/WebsiteProvider";

const LogoWrapper = styled.div`
  position: fixed;
  z-index: 3000;
  top: 4rem;
  left: 4rem;

  @media (max-width: 768px) {
    top: 2rem;
    left: 1.5rem;
  }
`;

export default function Navigation() {
  const { 
    setMenuOpenLevel, 
    setExpandedMenu 
  } = useContext(WebsiteSettingContext);
  
  return (
    <>
      <LogoWrapper>
        <ThemedAniLink
          paintDrip
          to="/"
          color="var(--page-theme-color)"
          duration={1}
          onClick={(e) => {
            setMenuOpenLevel(0);
            setExpandedMenu(null);
          }}
        >
          <ToposLogo color="var(--current-section-text-color)" />
        </ThemedAniLink>
      </LogoWrapper>
      <Menu />
    </>
  );
}
