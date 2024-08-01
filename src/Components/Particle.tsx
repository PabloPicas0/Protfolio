import React from "react";
import Particles from "@tsparticles/react";

import { memo } from "react";

import { ISourceOptions } from "@tsparticles/engine/types/export-types";

const Particle = memo((props: { id: string; options: ISourceOptions }) => {
  const { id, options } = props;

  return <Particles id={id} options={options} />;
});

export default Particle;
