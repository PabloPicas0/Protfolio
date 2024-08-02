import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import ReactIcon from "../images/icons/ReactIcon.svg";
import NodeJs from "../images/icons/nodeJs.svg";
import express from "../images/icons/express.svg";
import mongodb from "../images/icons/mongodb.svg";
import d3 from "../images/icons/d3.svg";
import mui from "../images/icons/mui.svg";

import { IndexPageData } from "../Models/IndexPageModel";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import getKey from "../utils/key";
import getSrc from "../utils/getSrc";

import animeExplorerImage from "../../projects/anime-xplorer-app/images/banner.png";
import aroundTheWorldImage from "../../projects/around-the-world-app/images/banner.png";
import useWindowWidth from "../Hooks/useWindowDimensions";

import styles, { Anchor, AnchorsWrapper } from "../Styles/Components/projectDetails";

const Projects = styles.Projects;
const Project = styles.Project;
const H2 = styles.H2;
const P = styles.P;

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
          <FontAwesomeIcon icon={faArrowRight} fontSize={14} className="projects-archive-icon" />
        </Link>
      </section>
    </>
  );
};

export default ProjectsDetails;
