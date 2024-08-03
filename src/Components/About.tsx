import React from "react";

const About = (props: { refSections: React.MutableRefObject<HTMLElement[]> }) => {
  const { refSections } = props;

  return (
    <section id="about" className="about-section" ref={(e) => (e ? (refSections.current[0] = e) : e)}>
      <h2 className="about-title">About</h2>
      <p className="about-content">
        Hi, I'm Paweł, a self-taught programmer. I'm passionate about everything that is connected to
        computers. Process of learning to code was for me the most fun part and right now I dedicate it most
        of my time.
      </p>

      <h2 className="about-title">What do I do?</h2>
      <p className="about-content">
        I have experience developing web applications and building websites. My world revolves around
        JavaScript/TypeScript ecosystem. I'm not afraid of other programming lagnguages and technologies and
        if there is a possibility I like to expand my knowledge.
      </p>
    </section>
  );
};

export default About;
