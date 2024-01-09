import type { PageProps, HeadFC } from "gatsby";
import React from "react";

const Projects: React.FC<PageProps> = () => {
  return <h1>Welcome from projects</h1>;
};

export default Projects;

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
