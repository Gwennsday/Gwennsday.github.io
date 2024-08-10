import { Divider, Grid } from "@mui/material";
import { videoList } from "../constants/siteConstants";
import VideoItem from "./VideoItem";
import IconCustom from "../ui/IconCustom";
import { mdiVideo } from "@mdi/js";

const Videos = () => {
  return (
    <Grid container className="grid h-[100%] w-full gap-4 p-4">
      <h2 className="text-gPurple-dark grid grid-cols-[auto_1fr] items-center justify-start gap-3 font-gTitle">
        <IconCustom svgFile={mdiVideo} size={1.3} />
        Videos, clips and more...
      </h2>
      <Divider className="-mt-2 h-fit bg-gPurple/50" />
      <Grid
        item
        className="customScrollBar flex h-[290px] flex-col gap-4 overflow-hidden overflow-y-auto rounded-lg border border-solid border-gPurple p-4"
      >
        {videoList.map((video, i) => {
          const { videoSrc, description, height, orientation } = video;
          return i % 2 === 0 ? (
            <Grid item key={i}>
              <VideoItem
                videoSrc={videoSrc}
                description={description}
                height={height}
                orientation={orientation}
                position="left"
              />
            </Grid>
          ) : (
            <Grid item key={i}>
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
