import styled from "@emotion/styled";
import React, { ReactNode, useState } from "react";

type BarProps = {
  isClicked: boolean;
};

const HamburgerMenu = styled.button`
  z-index: 1337;
  background-color: transparent;
  border: none;
`;

const Bar = styled.div<BarProps>`
  width: 24px;
  height: 2px;
  background-color: ${(props) => (props.isClicked ? "" : "whitesmoke")};
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

const Parent = styled.div<BarProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: ${(props) => (props.isClicked ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  gap: 6rem;
  align-items: center;
  background-color: #663399;
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

      <Parent isClicked={isClicked}>{children}</Parent>
    </>
  );
};

export default HeroMobile;
