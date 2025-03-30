import Emotes from "@components/Emotes";
import { Celebration, Cloud } from "@mui/icons-material";
import { Fab, Fade, Grid } from "@mui/material";
import generateEmoteList from "@utils/generateEmoteList";
import { useState } from "react";

const EmotesButton = () => {
  const [isRaining, setIsRaining] = useState(false);
  const [mode, setMode] = useState("rain");
  const [emotes, setEmotes] = useState([]);

  const duration = 10;

  const handleMakeRain = () => {
    setEmotes(generateEmoteList());
    setIsRaining((cur) => !cur);
  };

  return (
    <>
      <Fade in={!isRaining}>
        <Fab
          className="!bg-g-gray-light !text-g-purple-dark !fixed right-4 bottom-2 !font-bold transition-all duration-500"
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
      </Fade>
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
