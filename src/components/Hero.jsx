import Logo from "@components/Logo";
import heroVideos from "@constants/heroVideos";
import { Divider, Grid, useMediaQuery } from "@mui/material";
import Heading from "@ui/Heading";
import VideoContainer from "@ui/VideoContainer";
import { useEffect, useState } from "react";

const Hero = () => {
  const [startVideo, setStartVideo] = useState({});
  const isMobile = useMediaQuery("(max-width:601px)");

  console.log(startVideo);

  useEffect(() => {
    const video = () => {
      const video = heroVideos.at(
        Math.floor(Math.random() * heroVideos.length),
      );
      return video;
    };
    setStartVideo(video());
  }, []);

  return (
    <Grid id="hero">
      <Grid className="flex flex-col items-center justify-center gap-10 lg:w-[80%] lg:flex-row">
        <Grid className="flex flex-col items-center justify-center gap-5">
          <Grid className="grid grid-cols-1 items-center justify-center lg:grid-cols-[auto_1fr] lg:justify-end">
            <Logo />
            <Grid className="text-center">
              <Heading>It's Gwennsday my dudes!</Heading>
              <Heading as="h2">and I wish you a happy Gewnnsday</Heading>
            </Grid>
          </Grid>
          <Divider className="bg-g-gray-light/50 w-[50%]" variant="middle" />
          <Grid>
            <p>
              Hey! Nice to meet you! 👋 I am a variety streamer who loves to do
              a bunch of different activities.
            </p>
            <p>
              ✨ I like survival games, fps games, and many more! I sew, cook,
              crochet, and do goofy activities!
            </p>
            <p>
              🍽🧶💃🧵 I have been streaming since December 2021 and I love
              growing my community and
              <br /> having fun with my internet friends!
            </p>
            <p>
              💜 I have a potty mouth, and say what comes to my mind before I
              think about it.
            </p>
            <p>
              🤷‍♀️ Be prepared for bad humor and poor puns as I cannot help
              myself.
            </p>
          </Grid>
        </Grid>
        <Grid className="flex items-center justify-center lg:justify-start">
          <VideoContainer
            videoSrc={startVideo.videoSrc}
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
