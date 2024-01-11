import React, { useEffect, useMemo, useState } from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import styled from "@emotion/styled";
import Hero from "../Components/Hero";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions } from "@tsparticles/engine/types/export-types";
import Seo from "../Components/Seo";

type IndexPageData = {
  allFile: {
    nodes: { name: string }[];
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

const IndexPage: React.FC<PageProps<IndexPageData>> = (props) => {
  const { data } = props;

  const [isParticlesLoaded, setIsParticlesLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsParticlesLoaded(true);
    });
  }, []);

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

        <section id="main-projects">
          <ul>
            {data.allFile.nodes.map((node) => {
              return <li key={node.name}>{node.name}</li>;
            })}
          </ul>
        </section>
      </Div>
    </Main>
  );
};

export const query = graphql`
  query Projects {
    allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      nodes {
        name
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
          color: rgb(226, 232, 240);
          margin: 0px;
          background-color: rgb(15, 23, 42);
          font-family: 'Inter', sans-serif;
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
        `}
      </style>
    </Seo>
  );
};
