import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { Link } from "@tanstack/react-router";

const Confirmation = ({ open, handleOpen }) => {
  return (
    <Dialog open={open} className="bg-g-pink/50 backdrop-blur-md">
      <DialogTitle className="bg-g-blue !font-g-title flex flex-col gap-1">
        <h2>Do you think you are worthy?</h2>
        <Divider className="bg-g-purple-dark" />
      </DialogTitle>
      <DialogContent className="bg-g-blue text-xl font-extrabold">
        Remember: there is no going back from this point!
      </DialogContent>
      <DialogActions className="bg-g-blue text-xl">
        <Button
          onClick={handleOpen}
          className="bg-g-purple text-g-gray-light hover:!bg-g-purple-light hover:!text-g-purple-dark font-extrabold transition-all duration-500"
        >
          I have my doubts if I'm worthy
        </Button>
        <Button
          className="bg-g-purple-dark text-g-gray-light hover:!bg-g-Pink font-extrabold transition-all duration-500"
          LinkComponent={Link}
          to="https://fansly.com/MistressWendy69"
          target="_blank"
          onClick={handleOpen}
        >
          I am worthy of proceeding to this!
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirmation;
