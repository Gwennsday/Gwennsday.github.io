import LogoImg from "@assets/images/Logo.png";
import { Avatar, Grid } from "@mui/material";

const Logo = () => {
  return (
    <Grid className="flex w-full items-center justify-center">
      <Avatar src={LogoImg} className="!h-[150px] !w-[150px]" />
    </Grid>
  );
};

export default Logo;
