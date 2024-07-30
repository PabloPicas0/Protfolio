import React from "react";

import styled from "@emotion/styled";

import useWindowWidth from "../Hooks/useWindowDimensions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileText } from "@fortawesome/free-regular-svg-icons";

import Socials from "./Socials";

const HeroContainer = styled.header`
  max-height: 100vh;
  padding: 6rem 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  top: 0;
`;

const P = styled.p`
  text-transform: uppercase;
  margin: 0;
`;

const Donwload = styled.button`
  background-image: linear-gradient(180deg, #566ff8 0%, #394fdc 100%);
  border: none;
  border-radius: 5px;
  font-size: 17px;
  color: inherit;
  cursor: pointer;
  padding: 10px 16px;
`;

const Hero = (props: { refNavigation: React.MutableRefObject<HTMLAnchorElement | null> }) => {
  const { refNavigation } = props;

  const windowWidth = useWindowWidth();

  return (
    windowWidth > 1065 && (
      <HeroContainer>
        <h1 style={{ margin: "0.5rem 0" }}>Paweł Feliksiak</h1>
        <P>front-end developer</P>

        <Socials />

        <Donwload>
          <FontAwesomeIcon icon={faFileText} className="resume-icon" />
          Resume
        </Donwload>
      </HeroContainer>
    )
  );
};

export default Hero;
