import React, {useLayoutEffect, useState, useRef } from "react";
import styled from '@emotion/styled';

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: ${(props) => props.zIndex || '-1'};
`;

const BackgroundImg = ({ src, alt, zIndex, disableParallax }) => {
  const [offset, setOffset] = useState(0);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    if (disableParallax) return;

    const handleScroll = () => {
      if (imageRef.current) {
        const elementTop = imageRef.current.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        const relativeOffset = elementTop / viewportHeight;
        
        const calculatedOffset = -relativeOffset * 200; 
        
        setOffset(calculatedOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [disableParallax]);

  return (
    <ImageWrapper ref={imageRef} zIndex={typeof zIndex !== 'undefined' ? `${zIndex}` : '-1'} style={{ transform: `translateY(${offset}px)` }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </ImageWrapper>
  );
}

export default BackgroundImg;
