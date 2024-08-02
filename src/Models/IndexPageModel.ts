import { ImageDataLike } from "gatsby-plugin-image";

export type IndexPageData = {
  allMdx: {
    nodes: {
      frontmatter: {
        banner: ImageDataLike;
        date: string;
        description: string;
        homepageUrl: string;
        repoUrl: string;
        techs: string[];
        title: string;
      };
      id: string;
    }[];
  };
};