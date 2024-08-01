import React from "react";

const About = (props: { refSections: React.MutableRefObject<HTMLElement[]> }) => {
  const { refSections } = props;

  return (
    <section id="about" className="about-section" ref={(e) => (e ? (refSections.current[0] = e) : e)}>
      <h2>About</h2>
      <p className="about-content">
        Hi, I'm Paweł, a self-taught programmer from Poland. One day I decided to switch career from being
        waiter/barman. What I didn't know back then is that in the process of learning to code I would soon
        discover a true passion.
      </p>

      <h2>What do I do?</h2>
      <p className="about-content">
        I have experience developing web applications, building websites and actively contributing to Open
        Source projects. My world revolves around React - that's the technology I know best and work daily
        with.
      </p>
    </section>
  );
};

export default About;
