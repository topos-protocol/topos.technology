import React, { useEffect, useState, useRef } from "react";
import styled from '@emotion/styled';
import { Parallax } from 'react-scroll-parallax';

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: ${(props) => props.zIndex || '-1'};
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

export default function BackgroundVideo({ src, zIndex, disableParallax }) {
  const [speed, setSpeed] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    if (disableParallax) return;
    if (imageRef.current) {
      const elementHeight = imageRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const relativeHeight = elementHeight / viewportHeight;

      const calculatedSpeed = -30 * relativeHeight;

      setSpeed(calculatedSpeed);
    }
  }, [imageRef, setSpeed]);

  return <VideoWrapper ref={imageRef} zIndex={typeof zIndex !== 'undefined' ? `${zIndex}` : '-1'}>
    <Parallax speed={speed} style={{ width: '100%', height: '100%' }}>
      <Video autoPlay loop muted playsInline>
        <source src={src} />
      </Video>
    </Parallax>
  </VideoWrapper>;
}