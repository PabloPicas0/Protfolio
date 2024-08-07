import { useStaticQuery, graphql } from "gatsby";

import React from "react";

import SeoProps from "../Models/SeoPropsModel";
import Query from "../Models/SeoQueryModel";

const Seo = (props: SeoProps) => {
  const { children, title } = props;

  const data: Query = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <html lang="en" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.meta} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        rel="stylesheet"></link>
      <title>{title || data.site.siteMetadata.title}</title>
      <body />

      {children}
    </>
  );
};

export default Seo;
