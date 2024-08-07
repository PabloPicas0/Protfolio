import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook, faFileText, faStar, faSuitcase, faUserAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "../Styles/Components/navigation";
import styled from "@emotion/styled";

import GatsbyLink from "./GatsbyLink";

const List = styles.List;
const Item = styles.Item;
const Anchor = styles.Anchor;
const Resume = styled(GatsbyLink)<{ isDesktop: boolean }>`
  display: grid;
  justify-items: center;
  color: inherit;
  text-decoration: none;
  letter-spacing: 0.05rem;
  font-size: ${(props) => (props.isDesktop ? "1rem" : "1.3rem")};
`;

const anchors = [
  { text: "Major Projects", href: "#major-projects", icon: faStar },
  { text: "All projects", href: "#all-projects", icon: faSuitcase },
  { text: "Contact", href: "#contact", icon: faContactBook },
];

const Navigation = (props: {
  isDesktop: boolean;
  refNavigation?: React.MutableRefObject<HTMLUListElement | null>;
  setIsClicked?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { isDesktop, refNavigation, setIsClicked } = props;

  const handleClick = () => {
    if (setIsClicked) setIsClicked(false);
  };

  return (
    <List ref={refNavigation}>
      <Item className={isDesktop ? "active" : ""} onClick={() => handleClick()}>
        <Anchor href="#about" isDesktop={isDesktop}>
          <FontAwesomeIcon icon={faUserAlt} fontSize={"1.2rem"} className="nav-icon" />
          About
        </Anchor>
      </Item>

      {anchors.map((anchor) => {
        const { text, href, icon } = anchor;

        return (
          <Item key={text} onClick={() => handleClick()}>
            <Anchor href={href} isDesktop={isDesktop}>
              <FontAwesomeIcon icon={icon} fontSize={"1.2rem"} className="nav-icon" />
              {text}
            </Anchor>
          </Item>
        );
      })}

      {!isDesktop && (
        <Item onClick={() => handleClick()}>
          <Resume isDesktop={isDesktop}>
            <FontAwesomeIcon icon={faFileText} fontSize={"1.2rem"} className="nav-icon" />
            Resume
          </Resume>
        </Item>
      )}
    </List>
  );
};

export default Navigation;
