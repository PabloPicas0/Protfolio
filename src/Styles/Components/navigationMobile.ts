import styled from "@emotion/styled";

const styles = {
  HamburgerMenu: styled.button`
    z-index: 1337;
    background-color: transparent;
    border: none;
  `,
  Bar: styled.div<{ isClicked: boolean }>`
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
  `,
  Popup: styled.div<{ isClicked: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100vw;
    height: 100vh;
    display: ${(props) => (props.isClicked ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #663399;
  `,
};

export default styles
