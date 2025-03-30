import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const root = document.getElementById("root");
    const hash = location.hash;
    setTimeout(() => {
      if (hash.length > 0) {
        const hashElement = document.getElementById(hash);
        if (hashElement) {
          root.scrollTop = hashElement.offsetTop - 130;
        }
      }
    }, 0);
  }, [location]);

  return null;
};

export default ScrollToHash;
