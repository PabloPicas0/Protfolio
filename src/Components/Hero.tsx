import React from "react";

import styled from "@emotion/styled";

import useWindowWidth from "../Hooks/useWindowDimensions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import HeroMobile from "./HeroMoblie";

const StyledHeader = styled.header`
  width: 50%;
  max-height: 100vh;
  padding: 6rem 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;

  @media (max-width: 1065px) {
    flex-direction: row;
    width: initial;
    padding: 0.8rem 2rem;
    background-color: #663399;
    z-index: 1337;
  }
`;

const Line = styled.span`
  display: block;
  width: 2rem;
  height: 1px;
  background-color: rgb(93, 111, 139);
  transition: all 100ms ease;
`;

const SocialMedia = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media (max-width: 1065px) {
    padding: 0;
  }
`;

const Ul = styled.ul`
  padding: 0px;
  margin: 4rem 0rem 0rem 0rem;
  list-style: none;
  color: rgb(93, 111, 139);

  li:hover {
    span {
      background-color: rgb(215 223 239);
      width: 4rem;
    }
    a {
      color: rgb(215 223 239);
    }
  }
`;

const Li = styled.li`
  margin-bottom: 0.75rem;
  max-width: fit-content;
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: inherit;
  text-decoration: none;
  letter-spacing: 0.05rem;
`;

const Hero = (props: { refNavigation: React.MutableRefObject<HTMLAnchorElement | null> }) => {
  const { refNavigation } = props;

  const windowWidth = useWindowWidth();

  return (
    <StyledHeader>
      {windowWidth > 1065 ? (
        <>
          <div>
            <h1>Paweł Feliksiak</h1>
            <h2
              style={{
                color: "#663399",
                textTransform: "uppercase",
              }}>
              front-end developer
            </h2>
            <p>I build pixel-perfect, accessible products for the web</p>

            <nav ref={refNavigation}>
              <Ul>
                <Li>
                  <Anchor href="#about" className="active">
                    <Line></Line>
                    About
                  </Anchor>
                </Li>

                <Li>
                  <Anchor href="#major-projects">
                    <Line></Line>
                    Major Projects
                  </Anchor>
                </Li>

                <Li>
                  <Anchor href="#all-projects">
                    <Line></Line>
                    All projects
                  </Anchor>
                </Li>

                <Li>
                  <Anchor href="#contact">
                    <Line></Line>
                    Contact
                  </Anchor>
                </Li>
              </Ul>
            </nav>
          </div>

          <SocialMedia>
            <li>
              <a href="https://github.com/PabloPicas0" target="_blank">
                <FontAwesomeIcon icon={faGithub} fontSize={"1.5rem"} className="icon" />
              </a>
            </li>

            <li>
              <a href="https://forum.freecodecamp.org/u/pabloo1/summary" target="_blank">
                <FontAwesomeIcon icon={faFreeCodeCamp} fontSize={"1.5rem"} className="icon" />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} fontSize={"1.5rem"} className="icon" />
              </a>
            </li>
          </SocialMedia>
        </>
      ) : (
        <HeroMobile>
          <nav>
            <Ul>
              <Li>
                <Anchor href="#about" className="active">
                  <Line></Line>
                  About
                </Anchor>
              </Li>

              <Li>
                <Anchor href="#major-projects">
                  <Line></Line>
                  Major Projects
                </Anchor>
              </Li>

              <Li>
                <Anchor href="#all-projects">
                  <Line></Line>
                  All projects
                </Anchor>
              </Li>

              <Li>
                <Anchor href="#contact">
                  <Line></Line>
                  Contact
                </Anchor>
              </Li>
            </Ul>
          </nav>

          <SocialMedia>
            <li>
              <a href="https://github.com/PabloPicas0" target="_blank">
                <FontAwesomeIcon icon={faGithub} fontSize={"1.5rem"} className="icon" />
              </a>
            </li>

            <li>
              <a href="https://forum.freecodecamp.org/u/pabloo1/summary" target="_blank">
                <FontAwesomeIcon icon={faFreeCodeCamp} fontSize={"1.5rem"} className="icon" />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} fontSize={"1.5rem"} className="icon" />
              </a>
            </li>
          </SocialMedia>
        </HeroMobile>
      )}
    </StyledHeader>
  );
};

export default Hero;
