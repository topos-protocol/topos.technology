import React from "react";
import styled from "@emotion/styled";
import RichText from "../../elements/RichText.jsx";
import Button from "../../elements/ButtonLink.jsx";
import dayjs from "dayjs";

const Wrapper = styled.div`
  font-size: 1.125rem;
  line-height: var(--line-height-1);
  grid-gap: 2.5rem;
  padding: 6.25rem 0px 6.25rem 0px;
  @media (max-width: 768px) {
    padding: 7.5rem 0px 5rem 0px;
  }

  .postPreview {
    flex-shrink: 0;
    width: 300px;
  }
  .links {
    display: flex;
    flex-direction: column;
    grid-gap: 0.5rem;
    margin-top: 4rem;

    a:hover {
      cursor: pointer;
      color: var(--primary-color-3);
    }
  }

  @media (max-width: 480px) {
    padding: 6.25rem 0px 4.5rem 0px;
  }

  .postData {
    margin-bottom: 7.5rem;
    display: flex;
    flex-direction: column;
    grid-gap: 2px;
  }

  .postExcerpt {
    font-size: 2.5rem;
    line-height: 0.95;
  }
  .postTitle {
    margin-bottom: 1.125rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
  }
`;

export default function PostPreview({ block }) {
  const post = block.post;

  return (
    <Wrapper>
      <div className="postData">
        <small>{post.supertitle}</small>
        {post.updatedAt && (
          <small>Updated {dayjs(post.updatedAt).format("MMMM D, YYYY")}</small>
        )}
      </div>
      <h3 className="postTitle">{post.postTitle}</h3>
      <div className="postExcerpt">
        <RichText element={post.excerpt} />
      </div>
    </Wrapper>
  );
}
