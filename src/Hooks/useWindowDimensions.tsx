import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [width, setWitdth] = useState(1920);

  useEffect(() => {
    const handleResize = () => {
      setWitdth(window.innerWidth);
    };
    
    setWitdth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export default useWindowWidth;
