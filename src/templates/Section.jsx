import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import BlockRenderer from "../blocks/BlockRenderer";
import Footer from "../layouts/Footer";
import Image from "../elements/BackgroundImg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BackgroundVideo from "../elements/BackgroundVideo";
import { createGlobalStyle } from "styled-components";

gsap.registerPlugin(ScrollTrigger);

export const SectionWrapper = styled.section`
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${(props) => props.textColor && `color: ${props.textColor};`}
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 7rem 0rem 7rem;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.horizontalScroll &&
    `
    display: flex;
    overflow-x: visible;
    padding: 0 0 !important;
    max-width: none;
    flex-direction: row;
  `}
  @media (max-width: 768px) {
    padding: 0px 3.6rem 5.5rem 3.6rem;
  }
  @media (max-width: 480px) {
    padding: 0px 1.5rem 3rem 1.5rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: ${({ overlay }) => overlay};
`;

export default function Section({ section, isLastSection }) {
  const contentRef = useRef(null);
  const sectionRef = useRef(null);

  const [logoInSection, setLogoInSection] = useState(false);
  const SectionStyle = createGlobalStyle`
    ${`
      :root {
        --current-section-background-color: ${section.backgroundColor?.value || "var(--primary-color-3)"
    };
        --current-section-text-color: ${section.textColor?.value || "var(--primary-color-3)"
    };
      }
    `}
  `;

  useEffect(() => {
    if (!sectionRef.current) return;

    const handleScroll = () => {
      const sectionHeight = sectionRef.current.offsetHeight;
      const sectionTop = sectionRef.current.offsetTop;
      const logoScrollPosition = document.documentElement.scrollTop + 62;

      if (
        logoScrollPosition >= sectionTop &&
        logoScrollPosition < sectionTop + sectionHeight
      ) {
        setLogoInSection(true);
      } else {
        setLogoInSection(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef.current]);

  useEffect(() => {
    if (section.horizontalScroll) {
      const scrollWidth = contentRef.current.scrollWidth;
      const viewportWidth = document.documentElement.clientWidth;
      const maxScrollWidth = scrollWidth - viewportWidth;

      const scrollTriggerInstance = gsap.to(contentRef.current, {
        x: () => -maxScrollWidth + "px",
        ease: "none",
        scrollTrigger: {
          trigger: contentRef.current,
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          end: () => "+=" + maxScrollWidth,
        },
      });

      return () => {
        scrollTriggerInstance.scrollTrigger.kill();
        scrollTriggerInstance.kill();
      };
    }
  }, [
    section.horizontalScroll,
    section.backgroundColor,
    section.textColor,
  ]);

  return (
    <>
      {logoInSection && <SectionStyle />}
      <SectionWrapper
        ref={sectionRef}
        backgroundColor={section.backgroundColor?.value}
        textColor={section.textColor?.value}
      >
        {section?.backgroundImage?.file?.url &&
          <Image
            disableParallax={section?.disableBackgroundParallax}
            src={section?.backgroundImage?.file?.url}
            alt={section?.backgroundImage?.description}
            zIndex={0}
          />
        }
        {section?.backgroundVideo?.file?.url &&
          <BackgroundVideo
            disableParallax={section?.disableBackgroundParallax}
            src={section?.backgroundVideo?.file?.url}
            zIndex={0}
          />
        }
        {section?.overlay && <Overlay overlay={section?.overlay} />}
        <ContentWrapper
          ref={contentRef}
          horizontalScroll={section.horizontalScroll}
        >
          {section?.blocks?.map((block, key) => (
            <BlockRenderer key={key} block={block} section={section} />
          ))}
        </ContentWrapper>

        {isLastSection && (
          <ContentWrapper>
            <Footer color={section?.textColor?.value} section={section} />
          </ContentWrapper>
        )}
      </SectionWrapper>
    </>
  );
}


