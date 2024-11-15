import { Grid2 as Grid } from "@mui/material";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

const Copyright = () => {
  return (
    <Grid
      container
      className="flex flex-col items-center justify-center text-xs text-gGray-light opacity-75"
    >
      <div className="content-center">
        All creation rights reserved &bull; (2024 - {year})
      </div>
      <div className="flex content-center gap-1">
        Website created by
        <Link
          to="https://vonschappler.github.io"
          target="_blank"
          className="font-bold text-gBlue no-underline hover:underline hover:underline-offset-2"
        >
          von Schappler
        </Link>
      </div>
    </Grid>
  );
};

export default Copyright;
