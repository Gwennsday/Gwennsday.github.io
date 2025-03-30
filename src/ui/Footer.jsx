import Copyright from "@components/Copyright";
import { Divider, Grid } from "@mui/material";
import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <footer id="contact">
      <Grid>
        <p className="font-g-title text-xl">Wanna talk business?</p>
        <p className="text-g-gray-light text-sm">
          I'm opened to business contact on my {""}
          <Link
            to={
              "mailto:pagan.princess5352@googlemail.com?subject=Business%20Inquiries%20-%20Twitch"
            }
            target="_blank"
            className="text-g-blue font-bold no-underline hover:underline hover:underline-offset-2"
          >
            e-mail
          </Link>
          !
        </p>
      </Grid>
      <Divider className="bg-g-gray-light/50 w-full" />
      <Copyright />
    </footer>
  );
};

export default Footer;
