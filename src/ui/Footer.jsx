import { Divider, Grid2 as Grid } from "@mui/material";
import Copyright from "../components/Copyright";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="grid w-full gap-3 bg-gPurple-dark px-3 py-5 text-gBlue">
      <Grid>
        <p className="font-gTitle text-xl">Wanna talk business?</p>
        <p className="text-sm text-gGray-light">
          I'm opened to business contact on my
          <Link
            to={
              "mailto:pagan.princess5352@googlemail.com?subject=Business%20Inquiries%20-%20Twitch"
            }
            target="_blank"
            className="font-bold text-gBlue no-underline hover:underline hover:underline-offset-2"
          >
            {" "}
            e-mail
          </Link>
          !
        </p>
      </Grid>

      <Divider className="w-full bg-gGray-light/50" />
      <Copyright />
    </footer>
  );
};

export default Footer;
