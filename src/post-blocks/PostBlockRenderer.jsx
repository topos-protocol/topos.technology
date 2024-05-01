
import React from 'react';
import PostContent from './PostContent/PostContent';
import PostImage from './PostImage/PostImage';
import MathFormula from './MathFormula/MathFormula';

export default function PostBlockRenderer({ postBlock }) {
  switch (postBlock.__typename) {
    case 'postContent':
      return <PostContent postBlock={postBlock} />;
    case 'postImage':
      return <PostImage postBlock={postBlock} />;
    case 'postMathFormula':
      return <MathFormula postBlock={postBlock} />;
    default:
      return null;
  }
};