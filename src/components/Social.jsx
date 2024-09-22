import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { mdiCancel, mdiRss, mdiSnapchat, mdiTwitch, mdiYoutube } from "@mdi/js";
import { Divider, Grid2 as Grid } from "@mui/material";
import { Link } from "react-router-dom";
import IconCustom from "../ui/IconCustom";
import SocialItem from "./SocialItem";

const Social = () => {
  return (
    <Grid container className="grid h-[100%] w-full gap-4 p-4">
      <h2 className="grid grid-cols-[auto_1fr] items-center justify-start gap-3 font-gTitle text-gPurple-dark">
        <IconCustom svgFile={mdiRss} size={1.3} />
        My social links
      </h2>
      <Divider className="-mt-2 h-fit bg-gPurple-dark/50" />
      <Grid
        item
        className="customScrollBar overflow-y-auto rounded-lg bg-gPurple-dark lg:max-h-[380px]"
      >
        <SocialItem
          title="Hangout with me on my streams"
          svgFile={mdiTwitch}
          defaultExpanded
        >
          <span className="socialDescription">
            After wacthing to some of my{" "}
            <Link to="https://www.twitch.tv/gwennsday" target="_blank">
              Twitch
            </Link>{" "}
            clips, are your really going to gooffy out this whole gooffyness?
          </span>
        </SocialItem>
        <SocialItem
          svgFile={mdiYoutube}
          title="Check more gooffy content on my Youtube channel"
          defaultExpanded
        >
          <span className="socialDescription">
            Check more goofy content on my{" "}
            <Link to="https://www.youtube.com/@gwennsday" target="_blank">
              YouTube
            </Link>{" "}
            channel
          </span>
        </SocialItem>
        <SocialItem icon={faDiscord} title="Join the fam!">
          <span className="socialDescription">
            Check the{" "}
            <Link to="https://discord.gg/Dv2F8wTexC" target="_blank">
              safe space
            </Link>{" "}
            I created for my fam and let's enjoy fun moments and jokes!
          </span>
        </SocialItem>
        <SocialItem
          svgFile={mdiSnapchat}
          title="Interact with me on my SnapChat"
        >
          <span className="socialDescription">
            Join my{" "}
            <Link
              to="https://www.snapchat.com/add/gwennsday?share_id=IRLkFUwW0B4&locale=en-US"
              target="_blank"
            >
              SnapChat
            </Link>{" "}
            group
          </span>
        </SocialItem>
        <SocialItem svgFile={mdiCancel} title="Exclusive only fans content!">
          <span className="socialDescription">
            Ha! Made you look here, just to find out my{" "}
            <Link to="https://www.tiktok.com/@gwennsdayttv" target="_blank">
              TikTok
            </Link>{" "}
            profile, which was made for my fans!
          </span>
        </SocialItem>
      </Grid>
    </Grid>
  );
};

export default Social;
