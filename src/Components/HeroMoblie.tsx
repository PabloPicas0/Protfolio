import styled from "@emotion/styled";
import React, { ReactNode, useState } from "react";

const HamburgerMenu = styled.button`
  z-index: 1337;
  background-color: transparent;
  border: none;
`;

const Bar = styled.div`
  width: 24px;
  height: 2px;
  background-color:${(props) => (props.isClicked ? "" : "whitesmoke")}; whitesmoke;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 2px;
    top: ${(props) => (props.isClicked ? "0px" : "-7px")};
    left: 0;
    background-color: whitesmoke;
    transform: ${(props) => (props.isClicked ? "rotate(45deg)" : "rotate(0deg)")};
    transition: all 250ms ease;
  }

  &:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 2px;
    top: ${(props) => (props.isClicked ? "0px" : "7px")};
    left: 0;
    background-color: whitesmoke;
    transform: ${(props) => (props.isClicked ? "rotate(-45deg)" : "rotate(0deg)")};
    transition: all 250ms ease;
  }
`;

const HeroMobile = (props: { children: ReactNode }) => {
  const { children } = props;

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <span>Paweł Feliksiak</span>
      <HamburgerMenu
        type="button"
        aria-label={isClicked ? "close menu" : "hamburger menu"}
        onClick={() => setIsClicked((prev) => !prev)}>
        <Bar isClicked={isClicked}></Bar>
      </HamburgerMenu>
      {/* <FontAwesomeIcon icon={faBars} onClick={() => setIsClicked((prev) => !prev)} style={{ zIndex: 1337 }} /> */}

      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          display: isClicked ? "flex" : "none",
          flexDirection: "column",
          justifyContent: "center",
          gap: "6rem",
          alignItems: "center",
          backgroundColor: "#663399",
        }}>
        {children}
      </div>
    </>
  );
};

export default HeroMobile;
