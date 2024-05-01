import React, { useContext } from "react";
import styled from "@emotion/styled";
import Logo from "../elements/ToposLogo.jsx";
import ThemedAniLink from "../elements/ThemeAnilink";
import { WebsiteSettingContext } from "../providers/WebsiteProvider";
import BlockForm from "../blocks/Form/Form.jsx";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  grid-gap: 2rem;
  margin: 2rem 0rem;
  color: var(--page-footer-color, inherit);
  justify-content: space-between;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  .footer-left {
  }

  .footer-right {
    width: 70%;
    display: flex;
    flex-direction: row;
    grid-gap: 2rem;
    flex-shrink: 0;

    @media (max-width: 768px) {
    flex-direction: column;
  
    form {
      width: 100%; 
    }
  }

  form {
    width: 720px;;
  }


`;

const LinkWrapper = styled.div`
  flex-shrink: 0;
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 6px;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: 1fr;

  a {
    color: inherit;
    position: relative;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.6;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
  grid-gap: 0.625rem;
  font-weight: 700;
`;

export default function Footer({ color, section }) {
  const websiteSettings = useContext(WebsiteSettingContext);

  if (!websiteSettings) {
    return <></>;
  }

  const { settings } = websiteSettings;

  return (
    <FooterWrapper>
      <div className="footer-left">
        <LogoContainer>
          <Logo color={color}></Logo>
          <span>topos</span>
        </LogoContainer>

      </div>
      <div className="footer-right">
        <LinkWrapper>
          {settings.footerNavigation?.map(({ _id, link, label }) => (
            <ThemedAniLink key={_id} to={link}>
              {label}
            </ThemedAniLink>
          ))}
        </LinkWrapper>
        {settings.footerForm && (
          <BlockForm
            block={settings.footerForm}
            section={section}
            noPadding={true}
          />
        )}
      </div>
    </FooterWrapper>
  );
}
