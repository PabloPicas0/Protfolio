import React, { useEffect, useMemo, useRef } from "react";

import { graphql, type HeadFC, type PageProps } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

import styled from "@emotion/styled";

import { ISourceOptions } from "@tsparticles/engine/types/export-types";

import Hero from "../Components/Hero";
import Seo from "../Components/Seo";
import useParticlesEngine from "../Hooks/useParticlesEngine";

import About from "../Components/About";
import ProjectsDetails from "../Components/ProjectsDetails";
import Contact from "../Components/Contact";
import useWindowWidth from "../Hooks/useWindowDimensions";
import Particle from "../Components/Particle";

export type IndexPageData = {
  allMdx: {
    nodes: {
      frontmatter: {
        banner: ImageDataLike;
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

  @media (max-width: 1065px) {
    display: block;
    padding: 0px;
  }
`;

const Div = styled.div`
  display: grid;
  width: 50%;
  padding: 96px 0px;

  @media (max-width: 1065px) {
    width: initial;
    padding: 96px 10px;
  }
`;

const IndexPage: React.FC<PageProps<IndexPageData>> = (props) => {
  const { data } = props;

  const { isParticlesLoaded } = useParticlesEngine();
  const windowWidth = useWindowWidth();

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
      { rootMargin: "-25% 0px -60% 0px" }
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

  return (
    <Main>
      {isParticlesLoaded && windowWidth > 1065 ? <Particle id="particles" options={options} /> : null}
      <Hero refNavigation={refNavigation} />

      <Div>
        <About refSections={refSections} />
        <ProjectsDetails data={data} refSections={refSections} />
        <Contact refSections={refSections} />
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
          banner {
            childImageSharp {
              gatsbyImageData
            }
          }
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
          margin-bottom: 9rem;
        }

        .icon {
          color: rgb(148, 163, 184);

          &:hover {
            color: whitesmoke;
          }
        }

        .about-section {
          margin-bottom: 12rem !important
        }
         
        .about-content { 
          line-height: 1.625rem;
          font-size: 18px;
        }

        .project-title {
          margin-top: 0px;

          @media (max-width: 445px) {
            text-align: center;
          }
        }

        .project-description {
          text-align: justify;
        }

        .project-stack { 
          display: flex;
          gap: 15px;
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

        .project-image {
          border: 2px solid;
          border-radius: 0.25rem;
          border-color: rgba(226, 232, 240, 0.1);
        }

        #contact {
          margin: 0rem 0rem 17rem 0rem
        }
        `}
      </style>
    </Seo>
  );
};
