import Hero from "@components/Hero";
import IconCustom from "@components/IconCustom";
import SocialList from "@components/SocialList";
import VideosList from "@components/VideosList";
import { faPlay, faRss } from "@fortawesome/free-solid-svg-icons";
import { Divider, Grid } from "@mui/material";
import Heading from "@ui/Heading";

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
    </>
  );
};

export default IndexPage;
