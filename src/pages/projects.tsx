import type { PageProps, HeadFC } from "gatsby";
import React from "react";
import Seo from "../Components/Seo";

const Projects: React.FC<PageProps> = () => {
  return <h1>Welcome from projects</h1>;
};

export default Projects;

// Fix: Seo component breaks page fast load
export const Head: HeadFC = () => {
  return (
    <Seo title="Paweł Feliksiak">
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
    </Seo>
  );
};
