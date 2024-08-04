import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  useMediaQuery,
} from "@mui/material";
import FaIcon from "../ui/IconCustom";
import { useEffect, useState } from "react";

const SocialItem = ({ icon, svgFile, title, children }) => {
  const matchWidth = useMediaQuery("(min-width: 1000px)");
  const [isDefaultExpanded, setIsDefaultExpandaded] = useState(matchWidth);
  useEffect(() => {
    matchWidth && setIsDefaultExpandaded((cur) => !cur);
  }, [matchWidth]);

  return (
    <Accordion
      className="border border-solid  border-gPurple bg-gBlue"
      defaultExpanded={isDefaultExpanded}
      disableGutters
    >
      <AccordionSummary className=" bg-gPurple">
        <Grid
          container
          className="grid grid-cols-[auto_1fr] items-center justify-start gap-3 text-gGray-light"
        >
          <Grid item>
            {icon && (
              <FaIcon
                icon={icon}
                className=" h-[30px] w-[30px] rounded-lg bg-gPurple text-gGray-light"
              />
            )}
            {svgFile && <FaIcon svgFile={svgFile} size={1.3} />}
          </Grid>
          <Grid item>
            <p className="font-gTitle text-2xl font-bold text-gGray-light">
              {title}
            </p>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails className="bg-transparent">{children}</AccordionDetails>
    </Accordion>
  );
};

export default SocialItem;
