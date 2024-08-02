type Query = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      meta: string;
    };
  };
};

export default Query;
