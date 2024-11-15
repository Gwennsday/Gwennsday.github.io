import { mdiVideo } from "@mdi/js";
import { Divider, Grid2 as Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { videoList } from "../constants/siteConstants";
import { getClips } from "../services";
import IconCustom from "../ui/IconCustom";
import VideoItem from "./VideoItem";

const Videos = () => {
  const [displayClips, setDisplayClips] = useState([]);
  useEffect(() => {
    const clips = async () => {
      const videos = await getClips();
      setDisplayClips(videos);
    };
    clips();
  }, []);
  return (
    <Grid container className="grid h-full w-full gap-4 p-4">
      <h2 className="grid grid-cols-[auto_1fr] items-center justify-start gap-3 font-gTitle text-gPurple-dark">
        <IconCustom svgFile={mdiVideo} size={1.3} />
        Videos, clips and more...
      </h2>
      <Divider className="-mt-2 h-fit bg-gPurple/50" />
      <Grid className="customScrollBar flex h-[380px] flex-col gap-4 overflow-hidden overflow-y-auto rounded-lg border border-solid border-gPurple p-4">
        {displayClips.map((video, i) => {
          const { videoSrc, description, orientation } = video;
          return i % 2 === 0 ? (
            <Grid key={i}>
              <VideoItem
                videoSrc={videoSrc}
                description={description}
                height={200}
                orientation={orientation}
                position="left"
              />
            </Grid>
          ) : (
            <Grid key={i}>
              <VideoItem
                videoSrc={videoSrc}
                description={description}
                height={200}
                orientation={orientation}
                position="right"
              />
            </Grid>
          );
        })}
        {videoList.map((video, i) => {
          const { videoSrc, description, height, orientation } = video;
          return i % 2 === 0 ? (
            <Grid key={i}>
              <VideoItem
                videoSrc={videoSrc}
                description={description}
                height={height}
                orientation={orientation}
                position="left"
              />
            </Grid>
          ) : (
            <Grid key={i}>
              <VideoItem
                videoSrc={videoSrc}
                description={description}
                height={height}
                orientation={orientation}
                position="right"
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Videos;
