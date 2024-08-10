import { Grid } from "@mui/material";
import VideoContainer from "./VideoContainer";

const VideoItem = ({
  position,
  videoSrc,
  description,
  height,
  orientation,
}) => {
  // console.log({ position, videoSrc, description, height, orientation });

  return (
    <>
      {position === "left" && (
        <Grid
          container
          className="flex items-center justify-center gap-3 !text-center"
        >
          <Grid item className="flex grow items-center justify-center">
            <VideoContainer
              videoSrc={videoSrc}
              height={height}
              orientation={orientation}
              muted={false}
              autoPlay={false}
            />
          </Grid>
          <Grid item className="flex grow items-center justify-center">
            {description}
          </Grid>
        </Grid>
      )}
      {position === "right" && (
        <Grid
          container
          className="flex items-center justify-center gap-3 !text-center"
        >
          <Grid item className="flex grow items-center justify-center">
            {description}
          </Grid>
          <Grid item className="flex grow items-center justify-center">
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
      {/* {position === "right" && (
        <Grid
          container
          className="flex items-center justify-center gap-3 !text-center"
        >
          <Grid item className="flex grow items-center justify-center">
            {description}
          </Grid>
          <Grid item className="flex grow items-center justify-center">
            <VideoContainer
              videoSrc={videoSrc}
              height={height}
              orientation={orientation}
            />
          </Grid>
        </Grid>
      )} */}
    </>
  );
};

export default VideoItem;
