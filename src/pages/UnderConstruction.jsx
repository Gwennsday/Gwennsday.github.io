import { Grid2 as Grid } from "@mui/material";

import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { mdiSnapchat, mdiTwitch, mdiYoutube } from "@mdi/js";

import PageLink from "../ui/IconLink";
import FaIcon from "../ui/IconCustom";

const UnderConstruction = () => {
  return (
    <Grid
      container
      className="grid h-full grid-flow-row content-center justify-center gap-5 text-center"
    >
      <h1>
        <span className="animate-pulse text-gPurple">You</span> are far, far
        from <span className="animate-pulse text-gPurple">normal</span>!
      </h1>
      <h2>And soon a far, far from normal website will be here...</h2>
      <h3>While you wait for the website, check me on:</h3>
      <Grid className="mx-auto mt-5 flex w-[75%] items-center justify-around gap-3">
        <h3>
          <PageLink to="https://www.tiktok.com/@gwennsdayttv" target="_blank">
            <FaIcon
              icon={faTiktok}
              className="h-[48px] w-[48px] rounded-lg bg-gPurple p-2 text-gBlue"
            />
          </PageLink>
        </h3>
        <h3>
          <PageLink
            to="https://www.twitch.tv/gwennsday"
            target="_blank"
            className="rounded-lg bg-gPurple p-1 text-gBlue"
          >
            <FaIcon svgFile={mdiTwitch} />
          </PageLink>
        </h3>

        <h3>
          <PageLink
            to="https://www.snapchat.com/add/gwennsday?share_id=IRLkFUwW0B4&locale=en-US"
            target="_blank"
            className="rounded-lg bg-gPurple p-1 text-gBlue"
          >
            <FaIcon svgFile={mdiSnapchat} />
          </PageLink>
        </h3>
        <h3>
          <PageLink
            to="https://www.youtube.com/@gwennsday"
            target="_blank"
            className="h-[100%] rounded-lg bg-gPurple p-1 text-gBlue"
          >
            <FaIcon svgFile={mdiYoutube} />
          </PageLink>
        </h3>
      </Grid>
    </Grid>
  );
};

export default UnderConstruction;
