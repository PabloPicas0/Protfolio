import React from "react";
import { Link } from "gatsby";

import styled from "@emotion/styled";

import ReactIcon from "../images/icons/ReactIcon.svg";
import NodeJs from "../images/icons/nodeJs.svg";
import express from "../images/icons/express.svg";
import mongodb from "../images/icons/mongodb.svg";
import d3 from "../images/icons/d3.svg";
import mui from "../images/icons/mui.svg";

import { IndexPageData } from "../pages";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import getKey from "../utils/key";
import getSrc from "../utils/getSrc";

const Project = styled.li`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding: 1rem;
  border-radius: 5px;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:hover {
    background-color: rgba(26, 41, 59, 0.5);
    box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
  }
`;

const mernIcons = [
  { src: mongodb, alt: "Photo of MongoDB database" },
  { src: express, alt: "Photo of express library" },
  { src: ReactIcon, alt: "Photo of React framework" },
  { src: NodeJs, alt: "Photo of NodeJs" },
];
const globeIcons = [
  { src: d3, alt: "Pthoto of d3 library" },
  { src: ReactIcon, alt: "Photo of React framework" },
  { src: mui, alt: "Photo of mui front end library" },
];

const Projects = (props: { data: IndexPageData }) => {
  const { data } = props;

  return (
    <>
      <section id="major-projects">
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Major Projects</h2>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <Project>
            <div>image</div>

            <div>
              <h3 className="project-title">Anime Explorer</h3>

              <p className="project-description">
                Anime Explorer is my biggest project which utilizes most of the tech stack i learned so far.
                It's built as MVP (minimal viable product) and its core functionality is to track user's
                favourite anime.
              </p>

              <div className="project-stack">
                {mernIcons.map((icon) => {
                  const { src, alt } = icon;

                  return <img alt={alt} key={getKey()} width={26} height={26} src={src} />;
                })}
              </div>
            </div>
          </Project>

          <Project>
            <div>image</div>

            <div>
              <h3 className="project-title">Around the World</h3>

              <p className="project-description">
                The app uses D3.js and React to create a highly interactive and responsive globe. Then it
                connects to various APIs to get some data about selected country.
              </p>

              <div className="project-stack">
                {globeIcons.map((icon) => {
                  const { src, alt } = icon;

                  return <img alt={alt} key={getKey()} width={26} height={26} src={src} />;
                })}
              </div>
            </div>
          </Project>
        </ul>
      </section>

      <section id="all-projects">
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>All Projects</h2>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {data.allMdx.nodes.map((node, idx) => {
            const { id } = node;
            const { banner, date, description, homepageUrl, repoUrl, techs, title } = node.frontmatter;

            return (
              <Project key={id}>
                <div>image</div>

                <div>
                  <h3 className="project-title">{title}</h3>

                  <p className="project-description">{description}</p>

                  <div className="project-stack">
                    {techs.map((tech) => {
                      return (
                        <img
                          src={getSrc(tech.toLowerCase())}
                          alt={`Image of ${tech}`}
                          key={getKey()}
                          width={26}
                          height={26}
                        />
                      );
                    })}
                  </div>
                </div>
              </Project>
            );
          })}
        </ul>

        <Link to="/projects" className="projects-archive">
          View full projects archive
          <FontAwesomeIcon
            icon={faArrowRight}
            fontSize={14}
            style={{ marginLeft: "5px" }}
            className="projects-archive-icon"
          />
        </Link>
      </section>
    </>
  );
};

export default Projects;