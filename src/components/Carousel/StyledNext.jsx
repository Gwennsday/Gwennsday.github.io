import { ChevronRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const StyledNext = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      className="!text-g-purple hover:!text-g-black !absolute !-right-3 !bg-transparent transition-all duration-500"
    >
      <ChevronRight />
    </IconButton>
  );
};

export default StyledNext;
