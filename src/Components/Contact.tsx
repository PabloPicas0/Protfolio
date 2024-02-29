import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { Anchor, AnchorsWrapper } from "./ProjectsDetails";

const Contact = (props: { refSections: React.MutableRefObject<HTMLElement[]> }) => {
  const { refSections } = props;

  return (
    <>
      <section id="contact" ref={(e) => (e ? (refSections.current[3] = e) : e)}>
        <div style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faPaperPlane} fontSize={"55px"} />
        </div>

        <h2 style={{ textAlign: "center", letterSpacing: "0.05rem" }}>Contact me!</h2>
        <p>Whether you have an idea for a project or just want to chat, feel free to shoot me an email!</p>

        <AnchorsWrapper style={{ justifyContent: "center" }}>
          <Anchor target="_blank" href="mailto:pawel.fe@gmail.com">
            Say Hello
          </Anchor>
        </AnchorsWrapper>
      </section>

      <footer style={{ textAlign: "center", color: "rgba(255,255,255,0.4)" }}>Made by Paweł Feliksiak</footer>
    </>
  );
};

export default Contact;
