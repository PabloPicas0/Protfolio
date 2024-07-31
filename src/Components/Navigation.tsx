import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook, faFileText, faStar, faSuitcase, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const List = styled.ul`
  padding: 0px;
  margin: 4rem 0rem 0rem 0rem;
  list-style: none;
  color: rgb(93, 111, 139);

  @media (max-width: 1065px) {
    color: rgb(215 223 239);
  }
`;

const Item = styled.li`
  background-color: rgba(26, 41, 59, 0.5);
  box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
  padding: 1rem 0.5rem;
  border-radius: 10px;
  margin-bottom: 1.2rem;
  text-align: center;

  &:hover {
    a {
      color: rgb(215 223 239);
    }
    svg {
      color: rgb(215 223 239);
    }
  }

  @media (max-width: 1065px) {
    margin: 0 auto 1.5rem auto;
  }
`;

const Anchor = styled.a<{ isDesktop: boolean }>`
  display: block;
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

const Navigation = (props: { isDesktop: boolean }) => {
  const { isDesktop } = props;

  return (
    <List>
      <Item>
        <FontAwesomeIcon icon={faUserAlt} />
        <Anchor href="#about" className="active" isDesktop={isDesktop}>
          About
        </Anchor>
      </Item>

      {anchors.map((anchor) => {
        const { text, href, icon } = anchor;

        return (
          <Item key={text}>
            <FontAwesomeIcon icon={icon} />
            <Anchor href={href} isDesktop={isDesktop}>
              {text}
            </Anchor>
          </Item>
        );
      })}

      {!isDesktop && (
        <Item>
          <FontAwesomeIcon icon={faFileText} />
          <Anchor href="#" isDesktop={isDesktop}>
            Resume
          </Anchor>
        </Item>
      )}
    </List>
  );
};

export default Navigation;
