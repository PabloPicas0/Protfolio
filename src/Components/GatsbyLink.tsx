import React, { ReactNode } from "react";
import { Link } from "gatsby";

const GatsbyLink = (props: { className?: string; children: ReactNode }) => {
  const { className, children } = props;

  return (
    <Link to="/resume" className={className}>
      {children}
    </Link>
  );
};

export default GatsbyLink;
