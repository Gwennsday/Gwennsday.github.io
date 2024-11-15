import { CircularProgress, Grid2 as Grid } from "@mui/material";
import { useEffect, useState } from "react";

const FakeLoadingPage = () => {
  const loadingText = [
    "... and a far, far from normal website is being loaded",
    "Fasten your belts",
    "Or don't... Who cares?",
    "You are almost there...",
    "Hang tight!",
  ];
  const [value, setValue] = useState(0);
  const [text, setText] = useState(loadingText[0]);

  let index = 0;
  useEffect(() => {
    const timer = setInterval(() => {
      index >= loadingText.length - 1 ? (index = 0) : index++;
      setText(loadingText[index]);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((cur) => cur + 1);
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid
      container
      className="grid h-full grid-flow-row items-center justify-center gap-5 text-center"
    >
      <Grid className="flex flex-col items-center justify-center">
        <h1 className="py-3">
          <span className="animate-pulse text-gPurple">You</span> are far, far
          from <span className="animate-pulse text-gPurple">normal</span>...
        </h1>
        <CircularProgress
          variant="determinate"
          value={value}
          className="text-gPurple-dark"
        />
        <h2 className="pb-3">{text}</h2>
      </Grid>
    </Grid>
  );
};

export default FakeLoadingPage;
