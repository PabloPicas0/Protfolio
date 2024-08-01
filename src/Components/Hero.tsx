import React from "react";

import useWindowWidth from "../Hooks/useWindowDimensions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileText } from "@fortawesome/free-regular-svg-icons";

import Socials from "./Socials";
import styles from "../Styles/Components/hero";

const HeroContainer = styles.HeroContainer;
const P = styles.P;
const Donwload = styles.Donwload;

const Hero = () => {
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
