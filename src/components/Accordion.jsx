import { KeyboardArrowUp } from "@mui/icons-material";
import {
  AccordionDetails,
  AccordionSummary,
  Accordion as BaseAccordion,
} from "@mui/material";
import Heading from "@ui/Heading";

const Accordion = ({ icon, title, children, displayVideo = false }) => {
  return (
    <BaseAccordion
      disableGutters
      className="!bg-g-purple-dark !text-g-gray-light first-of-type:!rounded-t-2xl last-of-type:!rounded-b-2xl"
    >
      <AccordionSummary
        expandIcon={<KeyboardArrowUp className="text-g-gray-light" />}
      >
        <Heading as="h3" className="font-g-title flex items-center gap-3">
          {icon} {title}
        </Heading>
      </AccordionSummary>
      <AccordionDetails
        className={`bg-g-blue text-g-black !border-g-purple-dark border-[1px] last-of-type:!rounded-b-2xl ${displayVideo && "!p-0"}`}
      >
        {children}
      </AccordionDetails>
    </BaseAccordion>
  );
};

export default Accordion;
