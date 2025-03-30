import useClips from "@api/useClips";
import Accordion from "@components/Accordion";
import Carousel from "@components/Carousel/Carousel";
import IconCustom from "@components/IconCustom";
import VideoCard from "@components/VideoCard";
import { responsiveVideos } from "@constants/responsiveCarousel";
import { videoList, ytList_Desk, ytList_Mobile } from "@constants/videosList";
import { faTwitch, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { CircularProgress, Grid, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

const VideosList = () => {
  const { data: clips, isLoading, error } = useClips.useGetClips();
  const isMobile = useMediaQuery("(max-width:601px)");
  const isTablet = useMediaQuery("(max-width:1025px)");
  const [ytList, setYtList] = useState(ytList_Desk);

  error && console.error({ error });
  // console.log(isTablet);

  useEffect(() => {
    if (isTablet) {
      setYtList(ytList_Mobile);
    } else {
      setYtList(ytList_Desk);
    }
    return;
  }, [isTablet]);

  return (
    <Grid>
      <Accordion
        title="Featured Twitch Clips"
        icon={<IconCustom icon={faTwitch} />}
        displayVideo
      >
        {isLoading ? (
          <Grid className="flex h-[400px] flex-col items-center justify-center gap-5">
            <CircularProgress className="!text-g-purple-dark" />
            <p className="font-extrabold">Loading videos...</p>
          </Grid>
        ) : (
          <Carousel
            className="h-full"
            autoPlay={false}
            responsive={responsiveVideos}
            showDots={false}
          >
            {clips?.map((clip, i) => {
              const { title, videoSrc, poster } = clip;
              return (
                <VideoCard
                  key={i}
                  title={title}
                  videoSrc={videoSrc}
                  poster={poster}
                  height={isMobile ? 250 : "auto"}
                />
              );
            })}
          </Carousel>
        )}
      </Accordion>
      <Accordion
        title="YouTube Shorts"
        icon={<IconCustom icon={faYoutube} />}
        displayVideo
      >
        <Carousel
          className=""
          autoPlay={false}
          responsive={responsiveVideos}
          showDots={false}
        >
          {ytList.map((video, i) => {
            const { title, videoSrc, height, orientation } = video;
            return (
              <VideoCard
                key={i}
                title={title}
                videoSrc={videoSrc}
                height={height}
                orientation={orientation}
              />
            );
          })}
        </Carousel>
      </Accordion>
      <Accordion
        title="Other Videos"
        icon={<IconCustom icon={faVideo} />}
        displayVideo
      >
        <Carousel
          className=""
          autoPlay={false}
          responsive={responsiveVideos}
          showDots={false}
        >
          {videoList.map((video, i) => {
            const { title, videoSrc, height, orientation } = video;
            return (
              <VideoCard
                key={i}
                title={title}
                videoSrc={videoSrc}
                height={height}
                orientation={orientation}
              />
            );
          })}
        </Carousel>
      </Accordion>
    </Grid>
  );
};

export default VideosList;
