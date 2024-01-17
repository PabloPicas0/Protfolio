import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const useParticlesEngine = () => {
  const [isParticlesLoaded, setIsParticlesLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsParticlesLoaded(true);
    });
  }, []);

  return { isParticlesLoaded };
};

export default useParticlesEngine
