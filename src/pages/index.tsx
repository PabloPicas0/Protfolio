import React, { useEffect, useMemo, useRef } from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import styled from "@emotion/styled";

import Particles from "@tsparticles/react";
import { ISourceOptions } from "@tsparticles/engine/types/export-types";

import Hero from "../Components/Hero";
import Seo from "../Components/Seo";
import useParticlesEngine from "../Hooks/useParticlesEngine";

import About from "../Components/About";
import ProjectsDetails from "../Components/ProjectsDetails";

export type IndexPageData = {
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
`;

const Div = styled.div`
  width: 50%;
  padding: 96px 0px;
`;

const IndexPage: React.FC<PageProps<IndexPageData>> = (props) => {
  const { data } = props;

  const { isParticlesLoaded } = useParticlesEngine();

  const refSections = useRef<HTMLElement[]>([]);
  const refNavigation = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, isIntersecting } = entry;

          const prevSection = refNavigation.current?.querySelector(".active");
          const nextSection = refNavigation.current?.querySelector(`a[href='#${target.id}']`);

          if (isIntersecting) {
            prevSection?.classList.remove("active");
            nextSection?.classList.add("active");
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    refSections.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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

  const Particle = useMemo(() => <Particles id="particles" options={options} />, []);

  return (
    <Main>
      {isParticlesLoaded ? Particle : null}
      <Hero refNavigation={refNavigation} />

      <Div>
        <About refSections={refSections} />
        <ProjectsDetails data={data} refSections={refSections} />
      </Div>
    </Main>
  );
};

export const query = graphql`
  query Projects {
    allMdx(
      filter: { frontmatter: { title: { regex: "/(Path Finder|Any Task|Sorting Machine|Game of Life)/g" } } }
    ) {
      nodes {
        frontmatter {
          description
          homepageUrl
          repoUrl
          techs
          title
          date
          banner
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

        .projects-archive {
          text-decoration: none;
          color: inherit;

          &:hover {
            text-decoration: underline;
            text-underline-offset: 8px;
            
            .projects-archive-icon {
              transform: translateX(8px)
            }
          }
        }

        .projects-archive-icon {
          transition: transform 200ms ease;  
        }

        .active {
          color:  rgb(226, 226, 240);

          & > span {
            width: 4rem;
            background-color: rgb(226, 226, 240);
          }
        }
        `}
      </style>
    </Seo>
  );
};
