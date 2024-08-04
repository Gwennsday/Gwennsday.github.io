import { Grid } from "@mui/material";
import Logo from "./Logo";

const Hero = ({ className = "" }) => {
  return (
    <Grid
      container
      className={`grid grid-cols-1 items-center justify-center gap-5 lg:grid-cols-[auto_auto] ${className}`}
    >
      <Grid item>
        <Logo />
      </Grid>
      <Grid item className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-center">It's Gwennsday, my dudes!</h1>
        <h2 className="text-center font-gTitle">
          and I wish you a happy Gwennsday!
        </h2>
        <p>Short decritive text about you comes here</p>
      </Grid>
    </Grid>
  );
};

export default Hero;
