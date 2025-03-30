import { Card, CardHeader, CardMedia } from "@mui/material";

const CardVideo = ({
  videoSrc,
  title,
  height,
  orientation,
  poster,
  ...props
}) => {
  const iframeHeight = height && height;

  const setWidth = (value) => {
    switch (value) {
      case "portrait":
        return (iframeHeight * 9 * 0.9) / 16;
      case "square":
        return iframeHeight * 0.85;
      case "paisage":
        return (iframeHeight * 16 * 0.85) / 9;
      default:
        return (iframeHeight * 16 * 0.85) / 9;
    }
  };

  const { muted = true, controls = true, autoPlay = true, loop = true } = props;

  return (
    <Card
      className={`!text-g-purple-dark !bg-g-gray-light/50 !m-0 !mx-auto grid h-full w-[80%] grid-rows-[1fr] !rounded-2xl !p-0 ${orientation === "portrait" && "!grid grid-cols-[1fr_auto]"} `}
    >
      <CardHeader
        title={title}
        className={`text-center ${!videoSrc && "!grow"}`}
      />
      {videoSrc && (
        <CardMedia
          sx={{
            width: setWidth(orientation),
          }}
          src={videoSrc}
          className={`!w-full !justify-self-end ${orientation === "portrait" && "!h-[258px] !w-fit"} $ !m-0 !p-0`}
          component="video"
          muted={muted}
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          poster={poster}
          allowFullScreen
        />
      )}
    </Card>
  );
};

export default CardVideo;
