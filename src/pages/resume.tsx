import { HeadFC, PageProps } from "gatsby";
import React from "react";

import Seo from "../Components/Seo";

const Resume: React.FC<PageProps> = () => {
  return <h1 style={{ width: "21cm", height: "29,7cm", backgroundColor: "red", margin: "0 auto" }}>Hello World</h1>;
};

export default Resume;

export const Head: HeadFC = () => {
  return (
    <Seo title="Paweł Feliksiak">
      <style>{}</style>
    </Seo>
  );
};
