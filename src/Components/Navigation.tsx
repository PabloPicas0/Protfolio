import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook, faFileText, faStar, faSuitcase, faUserAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "../Styles/Components/navigation";

const List = styles.List;
const Item = styles.Item;
const Anchor = styles.Anchor;

const anchors = [
  { text: "Major Projects", href: "#major-projects", icon: faStar },
  { text: "All projects", href: "#all-projects", icon: faSuitcase },
  { text: "Contact", href: "#contact", icon: faContactBook },
];

const Navigation = (props: {
  isDesktop: boolean;
  refNavigation?: React.MutableRefObject<HTMLUListElement | null>;
}) => {
  const { isDesktop, refNavigation } = props;

  return (
    <List ref={refNavigation}>
      <Item className={isDesktop ? "active" : ""}>
        <Anchor href="#about" isDesktop={isDesktop}>
          <FontAwesomeIcon icon={faUserAlt} fontSize={"1.2rem"} className="nav-icon" />
          About
        </Anchor>
      </Item>

      {anchors.map((anchor) => {
        const { text, href, icon } = anchor;

        return (
          <Item key={text}>
            <Anchor href={href} isDesktop={isDesktop}>
              <FontAwesomeIcon icon={icon} fontSize={"1.2rem"} className="nav-icon" />
              {text}
            </Anchor>
          </Item>
        );
      })}

      {!isDesktop && (
        <Item>
          <Anchor href="#" isDesktop={isDesktop}>
            <FontAwesomeIcon icon={faFileText} fontSize={"1.2rem"} className="nav-icon" />
            Resume
          </Anchor>
        </Item>
      )}
    </List>
  );
};

export default Navigation;
