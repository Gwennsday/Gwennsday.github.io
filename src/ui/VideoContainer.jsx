import { Card, CardMedia } from "@mui/material";

const VideoContainer = ({
  videoSrc,
  height,
  orientation = "landscape",
  ...props
}) => {
  const iframeHeight = height && height;

  const setWidth = (value) => {
    switch (value) {
      case "portrait":
        return (iframeHeight * 9 * 0.9) / 16;
      case "square":
        return iframeHeight * 0.85;
      default:
        return (iframeHeight * 16 * 0.85) / 9;
    }
  };

  const {
    muted = true,
    controls = true,
    autoPlay = true,
    loop = false,
  } = props;

  return (
    <Card
      sx={{
        width: setWidth(orientation),
        height: "fit-content",
      }}
      className="!relative !rounded-lg"
    >
      <CardMedia
        sx={{
          height: height,
        }}
        className="relative !h-fit rounded-lg border-none shadow-md"
        src={videoSrc}
        component="video"
        muted={muted}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        allowFullScreen
      />
    </Card>
  );
};

export default VideoContainer;
