import { Card, CardMedia } from "@mui/material";

const VideoContainer = ({ videoSrc, height, orientation, ...props }) => {
  const iframeHeight = height && height;

  const iframeWidth = (value) => {
    switch (value) {
      case "portrait":
        console.table({
          real: (iframeHeight * 9) / 16,
          changed: (iframeHeight * 0.85 * 9) / 16,
        });
        return (iframeHeight * 9 * 0.9) / 16;
      case "square":
        console.table({
          real: iframeHeight,
          changed: iframeHeight * 0.9,
        });
        return iframeHeight * 0.85;
      default:
        console.table({
          real: (iframeHeight * 9) / 16,
          changed: (iframeHeight * 0.9 * 9) / 16,
        });
        return (iframeHeight * 16 * 0.85) / 9;
    }
  };

  const {
    muted = true,
    controls = true,
    autoPlay = false,
    loop = false,
  } = props;

  return (
    <Card
      style={{ width: iframeWidth(orientation) }}
      className="rounded-lg border-none shadow-gShadow"
    >
      <CardMedia
        src={videoSrc}
        component="video"
        // style={{
        //   height: iframeHeight,
        // }}
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
