import { Circle } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const StyledDot = ({ onClick, active }) => {
  return (
    <IconButton
      onClick={(e) => {
        onClick();
        e.preventDefault();
      }}
      className={`!text-g-blue/50 h-[3px] w-[3px] rounded-full !border !transition-colors !duration-500 ${active && "!text-g-gray-light"}`}
    >
      <Circle className={`!text-xs`} />
    </IconButton>
  );
};

export default StyledDot;
