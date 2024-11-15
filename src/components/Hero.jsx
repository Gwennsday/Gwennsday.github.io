import { Divider, Grid2 as Grid, useMediaQuery } from "@mui/material";
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
      item
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
            <Grid className="grid grid-cols-[auto_1fr] items-center">
              <Logo />
              <Grid>
                <h1 className="text-center text-5xl font-extrabold text-gGray-light">
                  It's Gwennsday, my dudes!
                </h1>
                <h2 className="text-center font-gTitle text-3xl text-gGray-light">
                  and I wish you a happy Gwennsday!
                </h2>
              </Grid>
            </Grid>
            <Divider className="my-2 w-[50%] bg-gGray-light/50" />
            <Grid>
              <p className="text-gGray-light">
                Hey! Nice to meet you! 👋 I am a variety streamer who loves to
                do a bunch of different activities.
              </p>
              <p className="text-gGray-light">
                ✨ I like survival games, fps games, and many more! I sew, cook,
                crochet, and do goofy activities!
              </p>
              <p className="text-gGray-light">
                🍽🧶💃🧵 I have been streaming since December 2021 and I love
                growing my community and
                <br /> having fun with my internet friends!
              </p>
              <p className="text-gGray-light">
                {" "}
                💜 I have a potty mouth, and say what comes to my mind before I
                think about it.
              </p>
              <p className="text-gGray-light">
                🤷‍♀️ Be prepared for bad humor and poor puns as I cannot help
                myself.
              </p>
            </Grid>
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
