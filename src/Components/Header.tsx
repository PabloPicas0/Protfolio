import styled from "@emotion/styled";
import { faFreeCodeCamp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StyledHeader = styled.header`
  width: 50%;
  max-height: 100vh;
  padding: 6rem 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

const Line = styled.span`
  display: block;
  width: 2rem;
  height: 1px;
  background-color: rgb(93, 111, 139);
  transition: all 100ms ease;
`;

const SocialMedia = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const Navigation = styled.ul`
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

const JumpLinkWrapper = styled.li`
  margin-bottom: 0.75rem;
  max-width: fit-content;
`;

const JumpLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: inherit;
  text-decoration: none;
  letter-spacing: 0.05rem;
`;

const Header = () => {
  return (
    <StyledHeader>
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

        <nav>
          <Navigation>
            <JumpLinkWrapper>
              <JumpLink href="#about">
                <Line></Line>
                About
              </JumpLink>
            </JumpLinkWrapper>

            <JumpLinkWrapper>
              <JumpLink href="#major-projects">
                <Line></Line>
                Major Projects
              </JumpLink>
            </JumpLinkWrapper>

            <JumpLinkWrapper>
              <JumpLink href="#all-projects">
                <Line></Line>
                All projects
              </JumpLink>
            </JumpLinkWrapper>

            <JumpLinkWrapper>
              <JumpLink href="#contact">
                <Line></Line>
                Contact
              </JumpLink>
            </JumpLinkWrapper>
          </Navigation>
        </nav>
      </div>

      <SocialMedia>
        <li>
          <a href="https://github.com/PabloPicas0">
            <FontAwesomeIcon icon={faGithub} fontSize={"1.5rem"} className="icon" />
          </a>
        </li>

        <li>
          <a href="https://forum.freecodecamp.org/u/pabloo1/summary">
            <FontAwesomeIcon icon={faFreeCodeCamp} fontSize={"1.5rem"} className="icon" />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/">
            <FontAwesomeIcon icon={faLinkedin} fontSize={"1.5rem"} className="icon" />
          </a>
        </li>
      </SocialMedia>
    </StyledHeader>
  );
};

export default Header;
