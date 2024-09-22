import { Divider, Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Social from "../components/Social";
import Videos from "../components/Videos";

const Index = () => {
  return (
    <Grid item className="grid h-[100%] grid-flow-row items-start gap-5">
      <Grid
        item
        className="mx-auto grid w-[90%] grow grid-cols-1 justify-center gap-6 transition-all duration-300 lg:w-[85%] lg:grid-cols-[1fr_1px_1fr]"
      >
        {/* <p className="my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit
          aliquam laboriosam harum corrupti perspiciatis nihil esse quasi,
          officiis repellendus illum suscipit ipsum saepe cupiditate ab! Dolore
          deserunt dolorum deleniti.
        </p>
        <p className="my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit
          aliquam laboriosam harum corrupti perspiciatis nihil esse quasi,
          officiis repellendus illum suscipit ipsum saepe cupiditate ab! Dolore
          deserunt dolorum deleniti.
        </p> */}
        <Grid item className="items-center justify-center">
          {/* <NavLink id="videos" hidden></NavLink> */}
          <Videos />
        </Grid>
        <Grid item className="lg:my-auto lg:h-[75%]">
          <Divider
            className="hidden justify-self-center bg-gPurple/50 align-middle lg:block"
            orientation="vertical"
          />
          <Divider className="bg-gPurple/50 lg:hidden" />
        </Grid>
        <Grid item className="items-center justify-center">
          <NavLink id="Socials" hidden></NavLink>
          <Social />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
