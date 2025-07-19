import { Fab } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { FaExclamation } from "react-icons/fa";

const SupportButton = ({ className = "" }) => {
  return (
    <>
      {/* <div className="absolute top-16 right-4 flex w-fit justify-end gap-5"> */}
      <Fab
        className={`!bg-g-pink !text-g-gray-light duration-500" !font-bold transition-all text-shadow-xs ${className} !text-shadow-g-purple-dark !fixed top-16 right-4 flex items-center gap-2 !shadow-none`}
        variant="extended"
        LinkComponent={Link}
        to="https://www.gofundme.com/f/help-me-start-a-new-life-moving-costs/cl/o?v=amp14_t2&utm_campaign=man_sharesheet_dash&utm_content=amp13_t1-amp14_t2&utm_medium=customer&utm_source=copy_link&lang=en_US&attribution_id=sl%3A653b2b0e-e635-4410-9bf5-de8150328a50&ts=1752857446"
        target="_blank"
      >
        <FaExclamation size={25} className="!text-shadow-lg" />
        <span className="text-[20px]">Gwen need's your help!</span>
      </Fab>
      {/* <Fab
        className={`!bg-g-pink-light !text-g-gray-light duration-500" !font-bold transition-all text-shadow-xs ${className} !text-shadow-g-purple-dark flex items-center gap-2 !shadow-none`}
        variant="extended"
        LinkComponent={Link}
        to="https://www.gofundme.com/f/help-me-start-a-new-life-moving-costs/cl/o?v=amp14_t2&utm_campaign=man_sharesheet_dash&utm_content=amp13_t1-amp14_t2&utm_medium=customer&utm_source=copy_link&lang=en_US&attribution_id=sl%3A653b2b0e-e635-4410-9bf5-de8150328a50&ts=1752857446"
        target="_blank"
      >
        <FaExclamation size={25} className="!text-shadow-lg" />
        <span className="text-[20px]">Gwen need's your help!</span>
      </Fab> */}
    </>
  );
};

export default SupportButton;
