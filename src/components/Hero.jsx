import { Divider, Grid, useMediaQuery } from "@mui/material";
import Logo from "./Logo";
import VideoContainer from "./VideoContainer";
import { startVideos } from "../constants/siteConstants";
import { useEffect, useState } from "react";

const Hero = ({ className = "" }) => {
  const [startVideo, setStartVideo] = useState({});
  const isMobile = useMediaQuery("(max-width:601px)");

  useEffect(() => {
    const video = () => {
      const video = startVideos.at(
        Math.floor(Math.random() * startVideos.length),
      );
      return video;
    };
    setStartVideo(video());
    // video();
  }, []);

  return (
    <Grid
      container
      className={`grid grid-cols-1 items-center justify-center gap-5 ${className} w-full bg-gPurple-dark p-5`}
    >
      <Grid
        item
        className="flex w-[100%] flex-col items-center justify-center gap-10 lg:mx-auto lg:w-[80%] lg:flex-row"
      >
        <Grid item className="flex flex-col items-center justify-center gap-3">
          <Grid
            item
            className="flex flex-col items-center justify-center gap-3"
          >
            <Logo />
            <h1 className="text-center text-5xl font-extrabold text-gGray-light">
              It's Gwennsday, my dudes!
            </h1>
            <h2 className="text-center font-gTitle text-3xl text-gGray-light">
              and I wish you a happy Gwennsday!
            </h2>
            <Divider className="my-2 w-[50%] bg-gGray-light/50" />
            <p className="text-center text-gGray-light">
              I am a variety streamer who loves to do a bunch of different
              activities.
            </p>
            <p className="text-center text-gGray-light">
              I like survival games, fps games, and many more! I sew, cook,
              crochet, and do goofy activities!
            </p>
          </Grid>
        </Grid>
        <Grid
          item
          className="mx-auto flex items-center justify-center lg:justify-start"
        >
          <VideoContainer
            videoSrc={startVideo.videoSrc}
            // height={startVideo.height}
            height={isMobile ? startVideo.height : 350}
            autoPlay
            muted
            loop
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
