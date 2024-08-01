import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { Anchor, AnchorsWrapper } from "../Styles/Components/projectDetails";

import styles from "../Styles/Components/contact";

const Footer = styles.Footer;
const H2 = styles.H2;
const P = styles.P;

const Contact = (props: { refSections: React.MutableRefObject<HTMLElement[]> }) => {
  const { refSections } = props;

  return (
    <>
      <section id="contact" ref={(e) => (e ? (refSections.current[3] = e) : e)}>
        <div style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faPaperPlane} fontSize={"55px"} />
        </div>

        <H2>Contact me!</H2>
        <P>Whether you have an idea for a project or just want to chat, feel free to shoot me an email!</P>

        <AnchorsWrapper style={{ justifyContent: "center" }}>
          <Anchor target="_blank" href="mailto:pawel.fe@gmail.com">
            Say Hello
          </Anchor>
        </AnchorsWrapper>
      </section>

      <Footer>Made by Paweł Feliksiak</Footer>
    </>
  );
};

export default Contact;
