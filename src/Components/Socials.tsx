import React from "react";

import { faGithub, faFreeCodeCamp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../Styles/Components/socials";

const SocialMediaList = styles.SocialMediaList;

const mediaIcons = [
  { icon: faGithub, href: "https://github.com/PabloPicas0" },
  { icon: faFreeCodeCamp, href: "https://forum.freecodecamp.org/u/pabloo1/summary" },
  { icon: faLinkedin, href: "https://www.linkedin.com/" },
];

const Socials = () => {
  return (
    <SocialMediaList>
      {mediaIcons.map((mediaIcon) => {
        const { href, icon } = mediaIcon;

        return (
          <li key={href}>
            <a href={href} target="_blank">
              <FontAwesomeIcon icon={icon} fontSize={"1.5rem"} className="icon" />
            </a>
          </li>
        );
      })}
    </SocialMediaList>
  );
};

export default Socials;
