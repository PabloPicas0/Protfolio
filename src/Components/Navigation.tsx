import React from "react";
import styled from "@emotion/styled";

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
  margin-bottom: 0.75rem;
  max-width: fit-content;

  &:hover {
    a {
      color: rgb(215 223 239);
    }
  }

  @media (max-width: 1065px) {
    margin: 0 auto 1.5rem auto;
  }
`;

const Anchor = styled.a<{ isDesktop: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: inherit;
  text-decoration: none;
  letter-spacing: 0.05rem;
  font-size: ${(props) => (props.isDesktop ? "1rem" : "1.3rem")};
`;

const anchors = [
  { text: "Major Projects", href: "#major-projects" },
  { text: "All projects", href: "#all-projects" },
  { text: "Contact", href: "#contact" },
  {text: "Resume", href: "#resume"} // TODO: Change resume href
];

const Navigation = (props: { isDesktop: boolean }) => {
  const { isDesktop } = props;

  return (
    <List>
      <Item>
        <Anchor href="#about" className="active" isDesktop={isDesktop}>
          About
        </Anchor>
      </Item>

      {anchors.map((anchor) => {
        const { text, href } = anchor;

        return (
          <Item key={text}>
            <Anchor href={href} isDesktop={isDesktop}>
              {text}
            </Anchor>
          </Item>
        );
      })}
    </List>
  );
};

export default Navigation;
