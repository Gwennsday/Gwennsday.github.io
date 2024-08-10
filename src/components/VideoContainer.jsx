import { Card, CardMedia } from "@mui/material";

const VideoContainer = ({ videoSrc, height, orientation, ...props }) => {
  const iframeHeight = height && height;

  const iframeWidth = (value) => {
    switch (value) {
      case "vertical":
        return (iframeHeight * 9) / 16;
      case "square":
        return iframeHeight;
      default:
        return (iframeHeight * 16) / 9;
    }
  };

  console.log({
    videoSrc,
    width: iframeWidth(orientation),
    height: iframeHeight,
  });

  const {
    muted = true,
    controls = true,
    autoPlay = false,
    loop = false,
  } = props;

  return (
    <Card
      style={{ width: iframeWidth(orientation) }}
      className="shadow-gShadow rounded-lg border-none"
    >
      <CardMedia
        src={videoSrc}
        component="video"
        style={{
          height: iframeHeight,
        }}
        className="rounded-lg border-none shadow-md"
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
