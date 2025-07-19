import { CircularProgress, Grid } from "@mui/material";
import Heading from "@ui/Heading";
import { useEffect, useState } from "react";
import SupportButton from "./SupportButton";

const loadingText = [
  "... and a far, far from normal website is being loaded",
  "Fasten your belts",
  "Or don't... Who cares?",
  "You are almost there...",
  "Hang tight!",
];

const FakeLoader = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(loadingText[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((cur) => (cur >= loadingText.length - 1 ? 0 : cur + 1));
      setText(loadingText[index]);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [index]);

  return (
    <Grid className="!mx-auto flex h-full w-[90%] flex-col items-center justify-center gap-10 text-center">
      <Heading>
        <span className="text-g-purple animate-pulse">You</span> are far, far
        from <span className="text-g-purple animate-pulse">normal</span>
        ...
      </Heading>
      <CircularProgress className="!text-g-purple-dark" />
      <Heading as="h2" className="pb-3">
        {text}
      </Heading>
      <SupportButton className="!bg-g-purple-dark !relative" />
    </Grid>
  );
};

export default FakeLoader;
