import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Fade, Grid, useScrollTrigger } from "@mui/material";
import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const root = document.getElementById("root");
  const trigger = useScrollTrigger({
    target: root,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleScrollTop = () => {
    root.scrollTo(0, 0);
    location.hash = "";
  };

  useEffect(() => {
    root.scrollTop = 0;
  }, [pathname, root]);

  return (
    <>
      <Fade in={trigger}>
        <Grid
          onClick={handleScrollTop}
          role="presentation"
          className="absolute right-1 bottom-11 z-[1000]"
        >
          <Fab
            size="small"
            aria-label="scroll back to top"
            onClick={handleScrollTop}
            className="'fixed !bg-multi-green-light !text-multi-brown hover:!bg-multi-gray hover:!text-multi-black right-[16px] bottom-[16px] transition-all duration-500"
          >
            <KeyboardArrowUp />
          </Fab>
        </Grid>
      </Fade>
    </>
  );
};

export default ScrollToTop;
