import Accordion from "@components/Accordion";
import IconCustom from "@components/IconCustom";
import {
  faDiscord,
  faSnapchat,
  faTiktok,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  // faCancel,
  faMoneyBillWave,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";
import { Link } from "@tanstack/react-router";
import Confirmation from "@ui/Confirmation";
import { useState } from "react";
import { SiKick } from "react-icons/si";

const SocialList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((cur) => !cur);
  };

  return (
    <Grid>
      <Accordion
        title="Hangout with me on my streams..."
        icon={<IconCustom icon={faTwitch} />}
      >
        <span className="social-description">
          After watching to some of my{" "}
          <Link to="https://www.twitch.tv/gwennsday" target="_blank">
            Twitch
          </Link>{" "}
          clips, are you really going to ignore this whole goofyness?
        </span>
      </Accordion>
      <Accordion
        title="... take your time to jam over there, ..."
        icon={<IconCustom icon={faMusic} />}
      >
        <span className="social-description">
          <Link
            to="https://streamlabs.com/gwennsday/chatbot/songlist"
            target="_blank"
          >
            This
          </Link>{" "}
          is a preview of what I'm listening to now with my peeps!
        </span>
      </Accordion>
      <Accordion
        title="... and shut up and give me your money!"
        icon={<IconCustom icon={faMoneyBillWave} />}
      >
        <span className="social-description">
          Pay me your{" "}
          <Link to="https://streamelements.com/gwennsday/tip" target="_blank">
            tributes
          </Link>{" "}
          and have{" "}
          <Link to="https://store.streamelements.com/gwennsday" target="_blank">
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
      </Accordion>
      <Accordion title="Come get your ass KICKed" icon={<SiKick size={25} />}>
        <span className="social-description">
          I have a new{" "}
          <Link to="https://kick.com/gwennsday" target="_blank">
            KICK
          </Link>{" "}
          page that I am streaming on! Help me monetize it by giving me a follow
          or a view!
        </span>
      </Accordion>
      <Accordion title="Join the fam!" icon={<IconCustom icon={faDiscord} />}>
        <span className="social-description">
          Check the{" "}
          <Link to="https://discord.gg/Dv2F8wTexC" target="_blank">
            safe space
          </Link>{" "}
          I created for my fam and let's enjoy fun moments and jokes!
        </span>
      </Accordion>
      <Accordion
        icon={<IconCustom icon={faSnapchat} />}
        title="Interact with me on my SnapChat"
      >
        <span className="social-description">
          Can't get enough of me? I snap daily and I have a group where we share
          our most unhinged thoughts..{" "}
          <Link
            to="https://www.snapchat.com/add/gwennsday?share_id=IRLkFUwW0B4&locale=en-US"
            target="_blank"
          >
            Join
          </Link>{" "}
          at your own risk!
        </span>
      </Accordion>
      <Accordion
        icon={<IconCustom icon={faYoutube} />}
        title="Check more goofy content on my Youtube channel"
      >
        <span className="social-description">
          Check more goofy content on my{" "}
          <Link to="https://www.youtube.com/@gwennsday" target="_blank">
            YouTube
          </Link>{" "}
          channel
        </span>
      </Accordion>
      <Accordion
        icon={<IconCustom icon={faTiktok} />}
        title="Not silly enough for ya?"
      >
        <span className="social-description">
          Well, what can I say? I have something here that will blow your mind!
          Just check my{" "}
          <Link to="https://www.tiktok.com/@gwennsdayttv" target="_blank">
            TikTok
          </Link>{" "}
          profile, which was made for my fans!
        </span>
      </Accordion>
      {/* <Accordion
        icon={<IconCustom icon={faCancel} />}
        title="Click here if dare..."
      >
        <span className="social-description">
          Ha! Made you look here, just to find out my{" "}
          <Link role="button" onClick={handleOpen}>
            Fansly
          </Link>{" "}
          profile!
        </span>
      </Accordion> */}
      <Confirmation open={isOpen} handleOpen={handleOpen} />
    </Grid>
  );
};

export default SocialList;
