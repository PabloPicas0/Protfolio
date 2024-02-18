import React from "react";
import Particles from "@tsparticles/react";
import { memo } from "react";

const Particle = memo((props) => {
  const { id, options } = props;

  return <Particles id={id} options={options} />;
});

export default Particle;
