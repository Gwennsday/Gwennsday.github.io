import { Celebration, Cloud } from "@mui/icons-material";
import { Fab, Grid2 as Grid } from "@mui/material";
import { useState } from "react";
import Emotes from "./Emotes";
import { generateList } from "../features/emotes/emotes";

const EmotesButton = () => {
  const [isRaining, setIsRaining] = useState(false);
  const [mode, setMode] = useState("rain");
  const [emotes, setEmotes] = useState([]);

  const duration = 10;

  const handleMakeRain = () => {
    setEmotes(generateList());
    setIsRaining((cur) => !cur);
  };

  return (
    <>
      <Fab
        className="fixed bottom-2 right-2 bg-gGray-light font-bold text-gPurple-dark transition-all duration-500 hover:bg-gGray-light hover:text-gPurple-dark"
        onClick={handleMakeRain}
        disabled={isRaining}
        variant="extended"
      >
        <Grid className="flex items-center gap-2">
          {mode === "rain" ? (
            <>
              <Cloud />
              Make it rain
            </>
          ) : (
            <>
              <Celebration />
              Party Time
            </>
          )}
        </Grid>
      </Fab>
      {isRaining && (
        <Emotes
          setIsRaining={setIsRaining}
          duration={duration}
          mode={mode}
          setMode={setMode}
          emotes={emotes}
        />
      )}
    </>
  );
};

export default EmotesButton;
