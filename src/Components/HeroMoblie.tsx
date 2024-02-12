import React, { ReactNode, useState } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroMobile = (props: { children: ReactNode }) => {
  const { children } = props;

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <span>Paweł Feliksiak</span>
      <FontAwesomeIcon icon={faBars} onClick={() => setIsClicked((prev) => !prev)} style={{ zIndex: 1337 }} />

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
