import Hero from "@components/Hero";
import IconCustom from "@components/IconCustom";
import SocialList from "@components/SocialList";
import VideosList from "@components/VideosList";
import SETTINGS from "@constants/settings";
import { faPlay, faRss } from "@fortawesome/free-solid-svg-icons";
import { Divider, Grid } from "@mui/material";
import Heading from "@ui/Heading";
import SupportButton from "@ui/SupportButton";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Grid component="section" id="videos" className="grid gap-3">
        <Heading as="h2" className="flex gap-3">
          <IconCustom icon={faPlay} />
          My videos
        </Heading>
        <Divider className="bg-g-purple" />
        <VideosList />
      </Grid>
      <Grid component="section" id="socials" className="grid gap-3">
        <Heading as="h2" className="flex gap-3">
          <IconCustom icon={faRss} />
          My Socials
        </Heading>
        <Divider className="bg-g-purple" />
        <SocialList />
      </Grid>
      {!SETTINGS.isUnderConstruction && (
        <SupportButton className="!top-0 left-4 !z-100000 !w-fit" />
      )}
    </>
  );
};

export default IndexPage;
