import { useStaticQuery, graphql } from "gatsby";
import React from "react";

type SeoProps = {
  title: string;
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

type Query = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const Seo = (props: SeoProps) => {
  const { children, title } = props;

  const data: Query = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <html lang="en" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"></link>
      <title>{data.site.siteMetadata.title || title}</title>
      <body />

      {children}
    </>
  );
};

export default Seo;
