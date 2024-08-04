import { Divider, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Videos from "../components/Videos";
import Social from "../components/Social";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <Grid container className="grid grid-flow-row items-start gap-5">
      <Hero className="mx-auto w-[90%] lg:w-[85%]" />
      <Grid item>
        <Divider className="bg-gPurple/50" />
      </Grid>

      <Grid
        container
        className="mx-auto grid w-[90%] grow grid-cols-1 items-center justify-center gap-6 divide-x-8  transition-all duration-300 lg:w-[85%] lg:grid-cols-[1fr_1px_1fr] lg:divide-y-8"
      >
        <Grid item className="items-center justify-center">
          <Link id="videos" hidden></Link>
          <Videos />
        </Grid>
        <Grid item className="h-[75%]">
          <Divider
            className="hidden  bg-gPurple/50 lg:block"
            orientation="vertical"
          />
          <Divider className="bg-gPurple/50 lg:hidden" />
        </Grid>
        <Grid item className="items-center justify-center">
          <Link id="Socials" hidden></Link>
          <Social />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
