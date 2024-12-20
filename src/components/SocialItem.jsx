import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid2 as Grid,
} from "@mui/material";
import FaIcon from "../ui/IconCustom";

const SocialItem = ({
  icon,
  svgFile,
  reactIcon,
  title,
  children,
  defaultExpanded,
}) => {
  return (
    <Accordion
      className="last:!rounded-br-none-none border border-solid border-gPurple-dark bg-gBlue first-of-type:!rounded-tr-none"
      disableGutters
      defaultExpanded={defaultExpanded}
    >
      <AccordionSummary className="bg-gPurple-dark first-of-type:!rounded-tr-none last-of-type:!rounded-br-none">
        <Grid
          container
          className="grid grid-cols-[auto_1fr] items-center justify-start gap-3 text-gGray-light"
        >
          <Grid>
            {icon && (
              <FaIcon
                icon={icon}
                className="h-[30px] w-[30px] rounded-lg bg-gPurple-dark text-gGray-light"
              />
            )}
            {svgFile && <FaIcon svgFile={svgFile} size={1.3} />}
            {reactIcon}
          </Grid>
          <Grid>
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
