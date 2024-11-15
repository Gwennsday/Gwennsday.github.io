import { Grid2 as Grid } from "@mui/material";
import VideoContainer from "./VideoContainer";

const VideoItem = ({
  position,
  videoSrc,
  description,
  height,
  orientation,
}) => {
  return (
    <>
      {position === "left" && (
        <Grid
          container
          className="flex items-center justify-center gap-3 !text-center"
        >
          <Grid className="flex grow items-center justify-center">
            <VideoContainer
              videoSrc={videoSrc}
              height={height}
              orientation={orientation}
              muted={false}
              autoPlay={false}
            />
          </Grid>
          <Grid className="flex max-w-[75%] grow items-center justify-center">
            <span className="!text-wrap font-gTitle font-bold">
              {description}
            </span>
          </Grid>
        </Grid>
      )}
      {position === "right" && (
        <Grid
          container
          className="flex items-center justify-center gap-3 !text-center"
        >
          <Grid className="flex max-w-[75%] grow items-center justify-center">
            <span className="!text-wrap font-gTitle font-bold">
              {description}
            </span>
          </Grid>
          <Grid className="flex grow items-center justify-center">
            <VideoContainer
              videoSrc={videoSrc}
              height={height}
              orientation={orientation}
              muted={false}
              autoPlay={false}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default VideoItem;
