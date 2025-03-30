import IconCustom from "@components/IconCustom";
import { faEnvelope, faPlay, faRss } from "@fortawesome/free-solid-svg-icons";
import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import { Link } from "@tanstack/react-router";

const Header = () => {
  const root = document.getElementById("root");
  const trigger = useScrollTrigger({
    target: root,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <AppBar className={`${trigger && "inverted"}`}>
      <Toolbar className="flex justify-end" variant="dense">
        <Link to="#videos">
          <IconCustom icon={faPlay} className="!w-15-[15px] !h-[15px]" />
          My Videos
        </Link>
        <Link to="#socials">
          {" "}
          <IconCustom icon={faRss} className="!w-15-[15px] !h-[15px]" />
          My Socials
        </Link>
        <Link to="#contact">
          <IconCustom icon={faEnvelope} className="!w-15-[15px] !h-[15px]" />
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
