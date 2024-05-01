import * as React from "react";
import styled from "@emotion/styled";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  font-weight: bold;
}`;

const NotFoundPage = () => {
  return (
    <Main>
      <h1>404 Page Not Found</h1>
    </Main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Page Not found</title>;
