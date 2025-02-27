import { mdiCancel, mdiRss } from "@mdi/js";
import { Divider, Grid2 as Grid } from "@mui/material";
import { useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import {
  SiDiscord,
  SiKick,
  SiSnapchat,
  SiTiktok,
  SiTwitch,
  SiYoutube,
} from "react-icons/si";
import { SlPlaylist } from "react-icons/sl";
import { Link } from "react-router-dom";
import Confirmation from "../ui/Confirmation";
import IconCustom from "../ui/IconCustom";
import SocialItem from "./SocialItem";

const Social = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((cur) => !cur);
  };

  return (
    <Grid container className="grid h-[100%] w-full gap-4 p-4">
      <h2 className="grid grid-cols-[auto_1fr] items-center justify-start gap-3 font-gTitle text-gPurple-dark">
        <IconCustom svgFile={mdiRss} size={1.3} />
        My social links
      </h2>
      <Divider className="-mt-2 h-fit bg-gPurple-dark/50" />
      <Grid className="customScrollBar overflow-y-auto rounded-lg bg-gPurple-dark lg:max-h-[380px]">
        <SocialItem
          title="Hangout with me on my streams..."
          reactIcon={<SiTwitch size={25} />}
        >
          <span className="socialDescription">
            After watching to some of my{" "}
            <Link to="https://www.twitch.tv/gwennsday" target="_blank">
              Twitch
            </Link>{" "}
            clips, are your really going to ignore this whole goofyness?
          </span>
        </SocialItem>
        <SocialItem
          title="... take your time to jam over there, ..."
          reactIcon={<SlPlaylist size={25} />}
        >
          <span className="socialDescription">
            <Link
              to="https://streamlabs.com/gwennsday/chatbot/songlist"
              target="_blank"
            >
              This
            </Link>{" "}
            is a preview of what I'm listening to now with my peeps!
          </span>
        </SocialItem>
        <SocialItem
          title="... and shut up and give me your money!"
          reactIcon={<FaMoneyBillWave size={25} />}
        >
          <span className="socialDescription">
            Pay me your{" "}
            <Link to="https://streamelements.com/gwennsday/tip" target="_blank">
              tributes
            </Link>{" "}
            and have{" "}
            <Link
              to="https://store.streamelements.com/gwennsday"
              target="_blank"
            >
              me
            </Link>{" "}
            always with you. Ah, you can also pay your taxes using my{" "}
            <Link
              to="https://www.paypal.com/donate/?hosted_button_id=32HVE684HNKAU"
              target="_blank"
            >
              tip jar
            </Link>
            !
          </span>
        </SocialItem>
        <SocialItem
          title="Come get your ass KICKed"
          reactIcon={<SiKick size={25} />}
        >
          <span className="socialDescription">
            I have a new{" "}
            <Link to="https://kick.com/gwennsday" target="_blank">
              KICK
            </Link>{" "}
            page that I am streaming on! Help me monetize it by giving me a
            follow or a view!
          </span>
        </SocialItem>
        <SocialItem reactIcon={<SiDiscord size={25} />} title="Join the fam!">
          <span className="socialDescription">
            Check the{" "}
            <Link to="https://discord.gg/Dv2F8wTexC" target="_blank">
              safe space
            </Link>{" "}
            I created for my fam and let's enjoy fun moments and jokes!
          </span>
        </SocialItem>
        <SocialItem
          reactIcon={<SiSnapchat size={25} />}
          title="Interact with me on my SnapChat"
        >
          <span className="socialDescription">
            Can't get enough of me? I snap daily and I have a group where we
            share our most unhinged thoughts..{" "}
            <Link
              to="https://www.snapchat.com/add/gwennsday?share_id=IRLkFUwW0B4&locale=en-US"
              target="_blank"
            >
              Join
            </Link>{" "}
            at your own risk!
          </span>
        </SocialItem>
        <SocialItem
          reactIcon={<SiYoutube size={25} />}
          title="Check more goofy content on my Youtube channel"
        >
          <span className="socialDescription">
            Check more goofy content on my{" "}
            <Link to="https://www.youtube.com/@gwennsday" target="_blank">
              YouTube
            </Link>{" "}
            channel
          </span>
        </SocialItem>
        <SocialItem
          reactIcon={<SiTiktok size={25} />}
          title="Not goofy enough for ya?"
        >
          <span className="socialDescription">
            Well, what can I say? I have something here that will blow your
            mind! Just check my{" "}
            <Link to="https://www.tiktok.com/@gwennsdayttv" target="_blank">
              TikTok
            </Link>{" "}
            profile, which was made for my fans!
          </span>
        </SocialItem>
        {/* <SocialItem svgFile={mdiCancel} title="Click here if dare...">
          <span className="socialDescription">
            Ha! Made you look here, just to find out my{" "}
            <Link role="button" onClick={handleOpen}>
              Fansly
            </Link>{" "}
            profile!
          </span>
        </SocialItem> */}
      </Grid>
      <Confirmation open={isOpen} handleOpen={handleOpen} />
    </Grid>
  );
};

export default Social;
