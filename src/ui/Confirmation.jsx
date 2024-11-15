import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

const Confirmation = ({ open, handleOpen }) => {
  return (
    <Dialog open={open} className="bg-gPink/50 backdrop-blur-md">
      <DialogTitle className="flex flex-col gap-1 bg-gBlue">
        <h2>Do you think you are worthy?</h2>
        <Divider className="bg-gPurple-dark" />
      </DialogTitle>
      <DialogContent className="bg-gBlue text-xl font-extrabold">
        Remember: there is no going back from this point!
      </DialogContent>
      <DialogActions className="bg-gBlue text-xl">
        <Button
          onClick={handleOpen}
          className="bg-gPurple font-extrabold text-gGray-light transition-all duration-500 hover:bg-gPurple-light hover:text-gPurple-dark"
        >
          I have my doubts if I'm worthy
        </Button>
        <Button
          className="bg-gPurple-dark font-extrabold text-gGray-light transition-all duration-500 hover:bg-gPink"
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
