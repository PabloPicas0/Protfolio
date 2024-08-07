import { useEffect, useState } from "react";

const useWindowWidth = () => {
  if (typeof window === "undefined") return;

  const [width, setWitdth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWitdth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export default useWindowWidth;
