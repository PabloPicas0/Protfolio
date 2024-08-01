import React, { useState } from "react";

import Navigation from "./Navigation";
import Socials from "./Socials";
import styles from "../Styles/Components/navigationMobile";

const HamburgerMenu = styles.HamburgerMenu;
const Bar = styles.Bar;
const Popup = styles.Popup;

const NavigationMobile = () => {
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

      <Popup isClicked={isClicked}>
        <nav>
          <Navigation isDesktop={false} />
        </nav>

        <Socials />
      </Popup>
    </>
  );
};

export default NavigationMobile;
