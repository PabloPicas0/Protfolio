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
  refNavigation: React.MutableRefObject<HTMLUListElement | null>;
}) => {
  const { isDesktop, refNavigation } = props;

  return (
    <List ref={refNavigation}>
      <Item className="active">
        <Anchor href="#about" isDesktop={isDesktop}>
          <FontAwesomeIcon icon={faUserAlt} />
          About
        </Anchor>
      </Item>

      {anchors.map((anchor) => {
        const { text, href, icon } = anchor;

        return (
          <Item key={text}>
            <Anchor href={href} isDesktop={isDesktop}>
              <FontAwesomeIcon icon={icon} />
              {text}
            </Anchor>
          </Item>
        );
      })}

      {!isDesktop && (
        <Item>
          <Anchor href="#" isDesktop={isDesktop}>
            <FontAwesomeIcon icon={faFileText} />
            Resume
          </Anchor>
        </Item>
      )}
    </List>
  );
};

export default Navigation;
