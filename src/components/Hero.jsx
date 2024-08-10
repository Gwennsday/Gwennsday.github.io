import { Grid } from "@mui/material";
import Logo from "./Logo";
import VideoContainer from "./VideoContainer";
import { startVideos } from "../constants/siteConstants";
import { useEffect, useState } from "react";

const Hero = ({ className = "" }) => {
  const [startVideo, setStartVideo] = useState({});

  useEffect(() => {
    const video = () => {
      const video = startVideos.at(
        Math.floor(Math.random() * startVideos.length),
      );
      return video;
    };
    setStartVideo(video());
    // video();
    console.log(video);
  }, []);

  return (
    <Grid
      container
      className={`grid grid-cols-1 items-center justify-center gap-5 lg:grid-cols-2 ${className} bg-gPurple-dark w-full p-5 lg:gap-20`}
    >
      <Grid
        item
        className="flex w-full flex-col items-center justify-center gap-3 lg:items-end"
      >
        <Grid item className="flex flex-col items-center justify-center gap-3">
          <Logo />
          <h1 className="text-center text-5xl font-extrabold text-gGray-light">
            It's Gwennsday, my dudes!
          </h1>
          <h2 className="text-center font-gTitle text-3xl text-gGray-light">
            and I wish you a happy Gwennsday!
          </h2>
          {/* <p>Short decritive text about you comes here</p> */}
        </Grid>
      </Grid>
      <Grid item className="flex items-center justify-center lg:justify-start">
        <VideoContainer
          videoSrc={startVideo.videoSrc}
          height={startVideo.height}
          autoPlay
          muted
          loop
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
