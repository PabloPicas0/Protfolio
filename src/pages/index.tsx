import React, { useEffect, useMemo, useRef } from "react";

import { graphql, type HeadFC, type PageProps } from "gatsby";

import { ISourceOptions } from "@tsparticles/engine/types/export-types";
import useParticlesEngine from "../Hooks/useParticlesEngine";

import Hero from "../Components/Hero";
import Seo from "../Components/Seo";
import About from "../Components/About";
import ProjectsDetails from "../Components/ProjectsDetails";
import Contact from "../Components/Contact";
import useWindowWidth from "../Hooks/useWindowDimensions";
import Particle from "../Components/Particle";
import Navigation from "../Components/Navigation";
import NavigationMobile from "../Components/NavigationMobile";
import { IndexPageData } from "../Controllers/IndexPageController";

import styles from "../Styles/Pages/Index";


const Main = styles.components.Main;
const Div = styles.components.Div;
const Nav = styles.components.Nav;

const IndexPage: React.FC<PageProps<IndexPageData>> = (props) => {
  const { data } = props;

  const { isParticlesLoaded } = useParticlesEngine();
  const windowWidth = useWindowWidth();

  const refSections = useRef<HTMLElement[]>([]);
  const refNavigation = useRef<HTMLAnchorElement>(null);

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

  const options: ISourceOptions = useMemo(() => styles.particles, []);

  return (
    <>
      {isParticlesLoaded && windowWidth > 1065 ? <Particle id="particles" options={options} /> : null}

      <Main>
        <Hero refNavigation={refNavigation} />

        <Div>
          <About refSections={refSections} />
          <ProjectsDetails data={data} refSections={refSections} />
          <Contact refSections={refSections} />
        </Div>

        <Nav>{windowWidth > 1065 ? <Navigation isDesktop={true} /> : <NavigationMobile />}</Nav>
      </Main>
    </>
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
      <style>{styles.head}</style>
    </Seo>
  );
};
