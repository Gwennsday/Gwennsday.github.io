import { Grid } from "@mui/material";
import { Link } from "@tanstack/react-router";

const year = new Date().getFullYear();

const Copyright = () => {
  return (
    <Grid className="text-g-gray-light flex flex-col items-center justify-center text-xs opacity-75">
      <span className="flex content-center gap-1">
        Website created by
        <Link
          to="https://vonschappler.github.io"
          target="_blank"
          className="text-g-blue font-bold no-underline hover:underline hover:underline-offset-2"
        >
          von Schappler
        </Link>
      </span>
      <span className="content-center">&copy; {year}</span>
    </Grid>
  );
};

export default Copyright;
