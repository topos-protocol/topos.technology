import React from "react";
import styled from "@emotion/styled";
import Button from "../../elements/ButtonLink.jsx";
import dayjs from "dayjs";

const Wrapper = styled.div`
  font-size: 0.875rem;
  line-height: var(--line-height-2);
  display: flex;
  grid-gap: 2.5rem;
  padding: 10rem 0px 6.25rem 0px;
  width: 100vw;
  @media (max-width: 1300px) {
    overflow: auto;
    margin-left: -8.5rem;
  }
  @media (max-width: 768px) {
    padding: 7.5rem 0px 5rem 0px;
    margin-left: -3.5rem;
  }
  @media (max-width: 480px) {
    margin-left: -1.5rem;
  }

  .postPreview {
    flex-shrink: 0;
    width: 300px;

    @media (max-width: 1300px) {
      &:first-child {
        margin-left: 7rem;
      }
      &:last-child {
        margin-right: 7rem;
      }
    }

    @media (max-width: 768px) {
      &:first-child {
        margin-left: 1.5rem;
      }
      &:last-child {
        margin-right: 1.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 6.25rem 0px 1rem 0px;
  }

  .postData {
    margin-bottom: 2.25rem;
    display: flex;
    flex-direction: column;
    grid-gap: 2px;
  }

  .postExcerpt {
    position: relative;
  }

  .postTitle,
  .postExcerpt {
    font-size: 1.5rem;
    line-height: 1.375rem;
    margin-bottom: 1.5rem;
  }
`;

// Function to extract text from the structured JSON excerpt
const extractText = (json) => {
  let extractedText = "";

  const traverseNodes = (node) => {
    if (node.nodeType === "text") {
      extractedText += node.value;
    } else if (node.content) {
      node.content.forEach(traverseNodes);
    }
  };

  traverseNodes(json);
  return extractedText;
};

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength).trim()}...`;
};

export default function PostList({ block, section }) {
  const sectionTextColor = section.textColor?.value;
  const sectionBackgroundColor = section.backgroundColor?.value;
  return (
    <Wrapper>
      {block.posts.map((post, index) => {
        // NOTE: Post URL will be implemented later
        const postUrl = "/article/" + post.slug;
        const excerptJson = post.excerpt; // Assume excerpt is stored in this variable as JSON

        // Extracting text from the JSON structure of the excerpt
        let excerptText = extractText(excerptJson);
        // Truncating the extracted text
        excerptText = truncateText(excerptText, 64); // Adjust maxLines as per your requirement

        return (
          <div key={index} className="postPreview">
            <div className="postData">
              <small>{post.supertitle}</small>
              {post.updatedAt && (
                <small>
                  Updated {dayjs(post.updatedAt).format("MMMM D, YYYY")}
                </small>
              )}
            </div>
            <div className="postTitle">
              <h3>{post.postTitle}</h3>
            </div>
            <div className="postExcerpt">{excerptText}</div>
            <Button
              link={postUrl}
              text={"Read More"}
              color={sectionTextColor}
              hoverColor={sectionBackgroundColor}
            />
          </div>
        );
      })}
    </Wrapper>
  );
}
