import styled from "@emotion/styled";
import React from "react";
import getKey from "../utils/key";

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

  @media (max-width: 1065px) {
    margin: 0 auto 0.75rem auto;
  }
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: inherit;
  text-decoration: none;
  letter-spacing: 0.05rem;
`;

const Line = styled.span`
  display: block;
  width: 2rem;
  height: 1px;
  background-color: rgb(93, 111, 139);
  transition: all 100ms ease;
`;

const anchors = [
  { text: "Major Projects", href: "#major-projects" },
  { text: "All projects", href: "#all-projects" },
  { text: "Contact", href: "#contact" },
];

const Navigation = (props: { isLineVisible: boolean }) => {
  const { isLineVisible } = props;

  return (
    <Ul>
      <Li>
        <Anchor href="#about" className="active">
          <Line style={{ display: isLineVisible ? "block" : "none" }}></Line>
          About
        </Anchor>
      </Li>

      {anchors.map((anchor) => {
        const { text, href } = anchor;

        return (
          <Li key={getKey()}>
            <Anchor href={href}>
              <Line style={{ display: isLineVisible ? "block" : "none" }}></Line>
              {text}
            </Anchor>
          </Li>
        );
      })}
    </Ul>
  );
};

export default Navigation;
