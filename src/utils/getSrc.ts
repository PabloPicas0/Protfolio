import ReactIcon from "../images/icons/ReactIcon.svg";
import NodeJs from "../images/icons/nodeJs.svg";
import express from "../images/icons/express.svg";
import mongodb from "../images/icons/mongodb.svg";
import d3 from "../images/icons/d3.svg";
import mui from "../images/icons/mui.svg";
import bootstrap from "../images/icons/bootstrap.svg";
import css from "../images/icons/css.svg";
import html from "../images/icons/html.svg";
import javascript from "../images/icons/javascript.svg";
import jest from "../images/icons/jest.svg";
import redux from "../images/icons/redux.svg";
import sass from "../images/icons/sass.svg";
import typescript from "../images/icons/typescript.svg";

const map: { [key: string]: string } = {
  react: ReactIcon,
  nodejs: NodeJs,
  express: express,
  mongodb: mongodb,
  d3: d3,
  mui: mui,
  bootstrap: bootstrap,
  css: css,
  html: html,
  javascript: javascript,
  jest: jest,
  redux: redux,
  sass: sass,
  typescript: typescript,
};

const getSrc = (tech: string) => {
  return map[tech];
};

export default getSrc;
