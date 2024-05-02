import React from "react";
import RichText from "../../elements/RichText";
import styled from "@emotion/styled";
import Button from "../../elements/ButtonLink.jsx";
import { useParallax } from "react-scroll-parallax";

const HeroWrapper = styled.div`
  padding: 7.5rem 0px 7.5rem 0px;

  &:first-of-type {
    padding-top: 12.5rem;
  }

  @media (max-width: 768px) {
    padding: 10rem 0px 6.25rem 0px;
  }

  @media (max-width: 480px) {
    padding: 7.5rem 0px 4.5rem 0px;
  }

  span.darkenBackground div {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.375rem;
    border-radius: 0.5em;
  }
`;

const Supertitle = styled.div`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: var(--line-height-1);
`;

const HeroTitle = styled.div`
  h1 {
    font-size: clamp(3.8rem, 8vw, 7.6rem);
    letter-spacing: -3px;
    line-height: var(--line-height-1);
    font-weight: 700;
  }

  h2 {
    font-size: clamp(2.6rem, 6vw, 5rem);
    letter-spacing: -3px;
    line-height: var(--line-height-1);
    font-weight: 700;
  }

  h3 {
    font-size: clamp(1.8rem, 6vw, 3rem);
    line-height: var(--line-height-1);
    font-weight: 700;
  }
`;

const HeroText = styled.div`
  max-width: 400px;
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: var(--line-height-4);
  font-weight: 700;
  margin-top: clamp(5.5rem, 40vh, 7.5rem);
  margin-bottom: clamp(2rem, 20vh, 3rem);

  p {
    margin-bottom: 1rem;
  }
`;

const ButtonSection = styled.div`
  margin-top: clamp(2rem, 20vh, 3rem)
`;

export default function BlockHero({ block, section }) {
  const sectionTextColor = section.textColor?.value;
  const sectionBackgroundColor = section.backgroundColor?.value;

  const heroSupertitleRef = useParallax({
    opacity: [-1.5, 10],
    speed: 5.5,
  });

  const heroTitleRef = useParallax({
    speed: 10,
    opacity: [-1.5, 10],
  });

  const heroTextRef = useParallax({
    speed: 5.25,
    opacity: [-1.5, 10],
  });

  const heroButtonRef = useParallax({
    speed: 5,
    opacity: [-1.5, 10],
  });

  const klass = block.darkenBackground ? 'darkenBackground' : block.darkenBackground;;

  return (
    <HeroWrapper>
      <span ref={heroSupertitleRef.ref}>
        {block.supertitle && <Supertitle>{block.supertitle}</Supertitle>}
      </span>

      <span ref={heroTitleRef.ref} class={klass}>
        {block.heroTitle && (
          <HeroTitle>
            <RichText element={block.heroTitle} />
          </HeroTitle>
        )}
      </span>

      <span ref={heroTextRef.ref} class={klass}>
        {block.heroText && (
          <HeroText>
            <RichText element={block.heroText} />
          </HeroText>
        )}
      </span>

      <span ref={heroButtonRef.ref}>
        {block.buttons && (
          <ButtonSection>
            {block.buttons?.map((button, key) => (
              <Button
                link={button.buttonUrl}
                element={button}
                key={key}
                text={button.buttonText}
                color={sectionTextColor}
                hoverColor={sectionBackgroundColor}
              ></Button>
            ))}
          </ButtonSection>
        )}
      </span>
    </HeroWrapper>
  );
}
