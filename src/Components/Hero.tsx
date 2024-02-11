import React from "react";

import styled from "@emotion/styled";

import useWindowWidth from "../Hooks/useWindowDimensions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import HeroMobile from "./HeroMoblie";
import Navigation from "./Navigation";

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

const SocialMedia = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media (max-width: 1065px) {
    padding: 0;
  }
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
              <Navigation isLineVisible={true} />
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
            <Navigation isLineVisible={false} />
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
