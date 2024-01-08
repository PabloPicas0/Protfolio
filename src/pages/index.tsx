import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "@emotion/styled";
import Header from "../Components/Header";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  max-width: 1280px;
  margin: 0px auto;
  padding: 0px 96px;
  fontfamily: -apple-system, Roboto, sans-serif, serif;
`;

const Section = styled.section`
  width: 50%;
  height: 150vh;
  padding: 96px 0px;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Main>
      <Header />
      <Section>
        <span>this is main content</span>
      </Section>
    </Main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="en" />
      <title>Paweł Feliksiak</title>
      <body />

      <style>
        {`
        * {
          box-sizing: border-box;
        }

        body {
          color: rgb(226, 232, 240);
          margin: 0px;
          background-color: rgb(15, 23, 42);
        }

        .icon {
          color: rgb(148, 163, 184);

          &:hover {
            color: whitesmoke;
          }
        }
        `}
      </style>
    </>
  );
};
