import { Divider, Grid2 as Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import Social from "../components/Social";
import Videos from "../components/Videos";

const Index = () => {
  return (
    <Grid className="grid h-[100%] grid-flow-row items-start gap-5">
      <Grid className="mx-auto grid w-[90%] grow grid-cols-1 justify-center gap-6 transition-all duration-300 lg:w-[85%] lg:grid-cols-[1fr_1px_1fr]">
        <Grid className="items-center justify-center">
          <NavLink id="videos" hidden></NavLink>
          <Videos />
        </Grid>
        <Grid className="lg:my-auto lg:h-[75%]">
          <Divider
            className="hidden justify-self-center bg-gPurple/50 align-middle lg:block"
            orientation="vertical"
          />
          <Divider className="bg-gPurple/50 lg:hidden" />
        </Grid>
        <Grid className="items-center justify-center">
          <NavLink id="Socials" hidden></NavLink>
          <Social />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
