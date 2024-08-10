import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { mdiCancel, mdiRss, mdiSnapchat, mdiTwitch, mdiYoutube } from "@mdi/js";
import { Divider, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import IconCustom from "../ui/IconCustom";
import SocialItem from "./SocialItem";

const Social = () => {
  return (
    <Grid container className="grid h-[100%] w-full gap-4 p-4">
      <h2 className="text-gPurple-dark grid grid-cols-[auto_1fr] items-center justify-start gap-3 font-gTitle">
        <IconCustom svgFile={mdiRss} size={1.3} />
        My social links
      </h2>
      <Divider className="-mt-2 h-fit bg-gPurple/50" />
      <Grid
        item
        className="customScrollBar h-[290px] overflow-y-auto rounded-lg bg-gBlue"
      >
        <SocialItem title="Hangout with me on my streams" svgFile={mdiTwitch}>
          After wacthing to some of my <Link>Twich Clips</Link>, are your really
          going to gooffy out this whole gooffyness?
        </SocialItem>
        <SocialItem
          svgFile={mdiYoutube}
          title="Check more gooffy content on my Youtube channel"
        >
          Check more goofy content on my <Link>YouTube</Link> channel
        </SocialItem>
        <SocialItem icon={faDiscord} title="Join the fam!">
          Check the <Link>safe space</Link> I created for my fam and let's enjoy
          fun moments and jokes!
        </SocialItem>
        <SocialItem
          svgFile={mdiSnapchat}
          title="Interact with me on my SnapChat"
        >
          Join my <Link>SnapChat</Link> group
        </SocialItem>
        <SocialItem svgFile={mdiCancel} title="Exclusive only fans content!">
          Ha! Made you look here, just to find out my <Link>TikTok</Link>{" "}
          profile, which was made for my fans!
        </SocialItem>
      </Grid>
    </Grid>
  );
};

export default Social;
