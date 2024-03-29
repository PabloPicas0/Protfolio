import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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

import animeExplorerImage from "../../projects/anime-xplorer-app/images/banner.png";
import aroundTheWorldImage from "../../projects/around-the-world-app/images/banner.png";
import useWindowWidth from "../Hooks/useWindowDimensions";

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

    .project-image {
      background-color: rgba(226, 232, 240, 0.3);
    }
  }

  @media (max-width: 445px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AnchorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 1.4rem;
`;

export const Anchor = styled.a`
  border: 1px solid;
  padding: 0.4rem;
  text-decoration: none;
  border-radius: 5px;
  color: rgba(226, 232, 240, 0.7);

  &:hover {
    color: aquamarine;
  }
`;

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const P = styled.p`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const Projects = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const mernIcons = [
  { src: mongodb, alt: "MongoDB icon" },
  { src: express, alt: "Express icon" },
  { src: ReactIcon, alt: "React icon" },
  { src: NodeJs, alt: "NodeJS icon" },
];
const globeIcons = [
  { src: d3, alt: "D3 icon" },
  { src: ReactIcon, alt: "React icon" },
  { src: mui, alt: "MUI icon" },
];

const ProjectsDetails = (props: {
  data: IndexPageData;
  refSections: React.MutableRefObject<HTMLElement[]>;
}) => {
  const { data, refSections } = props;

  const windowWidth = useWindowWidth();

  return (
    <>
      <section id="major-projects" ref={(e) => (e ? (refSections.current[1] = e) : e)}>
        <H2>Major Projects</H2>
        <P>Projects that I spent the most time working on and the ones that I constantly keep updating.</P>

        <Projects>
          <Project>
            {windowWidth > 445 ? (
              <img
                src={animeExplorerImage}
                alt="Image of Anime Explorer project"
                width={120}
                height={70}
                className="project-image"
              />
            ) : null}

            <div style={{ flex: "1" }}>
              <h3 className="project-title">Anime Explorer</h3>

              {windowWidth < 445 ? (
                <div style={{ margin: "0 auto", width: "fit-content" }}>
                  <img
                    src={animeExplorerImage}
                    alt="Image of Anime Explorer project"
                    width={120}
                    height={70}
                    className="project-image"
                  />
                </div>
              ) : null}

              <p className="project-description">
                Anime Explorer is my biggest project which utilizes most of the tech stack i learned so far.
                It's built as MVP (minimal viable product) and its core functionality is to track user's
                favourite anime.
              </p>

              <div className="project-stack">
                {mernIcons.map((icon) => {
                  const { src, alt } = icon;

                  return (
                    <img
                      alt={alt}
                      key={getKey()}
                      width={26}
                      height={26}
                      src={src}
                      title={`${alt.split(" ", 1)}`}
                    />
                  );
                })}
              </div>

              <AnchorsWrapper>
                <Anchor target="_blank" href="https://github.com/PabloPicas0/Anime-Xplorer-App">
                  Source Code
                </Anchor>

                <Anchor target="_blank" href="https://pablopicas0.github.io/Anime-Xplorer-App/">
                  Project Live
                </Anchor>
              </AnchorsWrapper>
            </div>
          </Project>

          <Project>
            {windowWidth > 445 ? (
              <img
                src={aroundTheWorldImage}
                alt="Image of Around the world project"
                width={120}
                height={70}
                className="project-image"
              />
            ) : null}

            <div style={{ flex: "1" }}>
              <h3 className="project-title">Around the World</h3>

              {windowWidth < 445 ? (
                <div style={{ margin: "0 auto", width: "fit-content" }}>
                  <img
                    src={aroundTheWorldImage}
                    alt="Image of Around the world project"
                    width={120}
                    height={70}
                    className="project-image"
                  />
                </div>
              ) : null}

              <p className="project-description">
                The app uses D3.js and React to create a highly interactive and responsive globe. Then it
                connects to various APIs to get some data about selected country.
              </p>

              <div className="project-stack">
                {globeIcons.map((icon) => {
                  const { src, alt } = icon;

                  return (
                    <img
                      alt={alt}
                      key={getKey()}
                      width={26}
                      height={26}
                      src={src}
                      title={`${alt.split(" ", 1)}`}
                    />
                  );
                })}
              </div>

              <AnchorsWrapper>
                <Anchor target="_blank" href="https://github.com/PabloPicas0/Around-The-World-App">
                  Source Code
                </Anchor>

                <Anchor target="_blank" href="https://pablopicas0.github.io/Around-The-World-App/">
                  Project Live
                </Anchor>
              </AnchorsWrapper>
            </div>
          </Project>
        </Projects>
      </section>

      <section id="all-projects" ref={(e) => (e ? (refSections.current[2] = e) : e)}>
        <H2>All Projects</H2>

        <Projects>
          {data.allMdx.nodes.map((node) => {
            const { id } = node;
            const { banner, description, homepageUrl, repoUrl, techs, title } = node.frontmatter;
            const image = getImage(banner);

            return (
              <Project key={id}>
                {image && windowWidth > 445 ? (
                  <div style={{ width: "120px" }}>
                    <GatsbyImage image={image} alt={`Photo of ${title} app`} className="project-image" />
                  </div>
                ) : null}

                <div style={{ flex: "1" }}>
                  <h3 className="project-title">{title}</h3>

                  {image && windowWidth < 445 ? (
                    <div style={{ width: "120px", margin: "0 auto" }}>
                      <GatsbyImage image={image} alt={`Photo of ${title} app`} className="project-image" />
                    </div>
                  ) : null}

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
                          title={tech}
                        />
                      );
                    })}
                  </div>

                  <AnchorsWrapper>
                    <Anchor target="_blank" href={repoUrl}>
                      Source Code
                    </Anchor>

                    <Anchor target="_blank" href={homepageUrl}>
                      Project Live
                    </Anchor>
                  </AnchorsWrapper>
                </div>
              </Project>
            );
          })}
        </Projects>

        <Link to="/projects" className="projects-archive">
          View full projects archive
          <FontAwesomeIcon
            icon={faArrowRight}
            fontSize={14}
            className="projects-archive-icon"
          />
        </Link>
      </section>
    </>
  );
};

export default ProjectsDetails;
