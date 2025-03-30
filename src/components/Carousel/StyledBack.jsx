import { ChevronLeft } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const StyledBack = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      className="!text-g-purple hover:!text-g-black !absolute !-left-3 !bg-transparent transition-all duration-500"
    >
      <ChevronLeft />
    </IconButton>
  );
};

export default StyledBack;
