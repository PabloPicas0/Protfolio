import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "@emotion/styled";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  max-width: 1280px;
  margin: 0px auto;
  padding: 0px 96px;
  fontfamily: -apple-system, Roboto, sans-serif, serif;
`;

const Header = styled.header`
  width: 50%;
  max-height: 100vh;
  padding: 6rem 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

const Section = styled.section`
  width: 50%;
  height: 150vh;
  padding: 96px 0px;
`;

const headingAccentStyles = {
  color: "#663399",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Main>
      <Header>
        <div>
          <h1>Paweł Feliksiak</h1>
          <h2 style={headingAccentStyles}>FRONT-END DEVELOPER</h2>
          <p>I build pixel-perfect, accessible products for the web</p>

          <nav>
            <ul>
              <li>About</li>
              <li>Major Projects</li>
              <li>All Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        <ul>
          <li>GitHub</li>
          <li>FCC</li>
          <li>LinkedIn</li>
        </ul>
      </Header>

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
        `}
      </style>
    </>
  );
};
