import React, { useMemo } from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import styled from "@emotion/styled";

import Particles from "@tsparticles/react";
import { ISourceOptions } from "@tsparticles/engine/types/export-types";

import Hero from "../Components/Hero";
import Seo from "../Components/Seo";
import useParticlesEngine from "../Hooks/useParticlesEngine";
import getKey from "../utils/key";

import ReactIcon from "../images/icons/ReactIcon.svg";
import NodeJs from "../images/icons/nodeJs.svg";
import express from "../images/icons/express.svg";
import mongodb from "../images/icons/mongodb.svg";
import d3 from "../images/icons/d3.svg";
import mui from "../images/icons/mui.svg";

type IndexPageData = {
  allMdx: {
    nodes: {
      frontmatter: {
        banner: string;
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

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  max-width: 1280px;
  margin: 0px auto;
  padding: 0px 96px;
  fontfamily: -apple-system, Roboto, sans-serif, serif;
`;

const Div = styled.div`
  width: 50%;
  height: 150vh;
  padding: 96px 0px;
`;

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

const IndexPage: React.FC<PageProps<IndexPageData>> = (props) => {
  const { data } = props;

  const { isParticlesLoaded } = useParticlesEngine();

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "rgb(15, 23, 42)",
        },
      },
      fullScreen: {
        zIndex: -1,
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 100,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  const mernIcons = [mongodb, express, ReactIcon, NodeJs];
  const globeIcons = [d3, ReactIcon, mui];

  return (
    <Main>
      {isParticlesLoaded ? <Particles id="particles" options={options} /> : null}
      <Hero />
      <Div>
        <section id="about" style={{ scrollMarginTop: "8rem" }}>
          <p className="about-content">
            Hi, I'm Paweł, a self-taught programmer from Poland. One day I decided to switch career from being
            waiter/barman. What I didn't know back then is that in the process of learning to code I would
            soon discover a true passion.
          </p>

          <p className="about-content">
            I have experience developing web applications, building websites and actively contributing to Open
            Source projects. My world revolves around React - that's the technology I know best and work daily
            with.
          </p>
        </section>

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
                    return <img key={getKey()} width={26} height={26} src={icon} />;
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
                    return <img key={getKey()} width={26} height={26} src={icon} />;
                  })}
                </div>
              </div>
            </Project>
          </ul>
        </section>

        <section id="projects">
          {/* <ul>
            {data.allMdx.nodes.map((node, idx) => {
              const { id } = node;
              const { banner, date, description, homepageUrl, repoUrl, techs, title } = node.frontmatter;
              
              return <li key={id}>{title}</li>;
            })}
          </ul> */}
        </section>
      </Div>
    </Main>
  );
};

export const query = graphql`
  query Projects {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          banner
          date
          description
          homepageUrl
          repoUrl
          techs
          title
        }
        id
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <Seo title="Paweł Feliksiak">
      <style>
        {`
        * {
          box-sizing: border-box;
        }

        html {
           scroll-behavior: smooth;
        }

        body {
          color: rgb(226, 226, 240);
          margin: 0px;
          background-color: rgb(15, 23, 42);
          font-family: 'Inter', sans-serif;
        }

        section {
          margin-bottom: 9rem
        }

        .icon {
          color: rgb(148, 163, 184);

          &:hover {
            color: whitesmoke;
          }
        }

        .about-content { 
          line-height: 1.625rem;
          font-size: 18px;
        }

        .project-title {
          margin-top: 0px;
        }

        .project-stack { 
          display: flex;
          gap: 15px
        }
        `}
      </style>
    </Seo>
  );
};
