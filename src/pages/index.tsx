import React, { useEffect, useMemo, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "@emotion/styled";
import Header from "../Components/Header";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions } from "@tsparticles/engine/types/export-types";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  max-width: 1280px;
  margin: 0px auto;
  padding: 0px 96px;
  fontfamily: -apple-system, Roboto, sans-serif, serif;
`;

const Section = styled.section`
  width: 50%;
  height: 150vh;
  padding: 96px 0px;
`;

const IndexPage: React.FC<PageProps> = () => {
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
      <Header />
      <Section>
        <span>this is main content</span>
        <span>this is main content</span>
      </Section>
    </Main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="en" />
      <title>Paweł Feliksiak</title>
      <body />

      <style>
        {`
        * {
          box-sizing: border-box;
        }

        body {
          color: rgb(226, 232, 240);
          margin: 0px;
          background-color: rgb(15, 23, 42);
        }

        .icon {
          color: rgb(148, 163, 184);

          &:hover {
            color: whitesmoke;
          }
        }
        `}
      </style>
    </>
  );
};
