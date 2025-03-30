import IconCustom from "@components/IconCustom";
import {
  faSnapchat,
  faTiktok,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Grid } from "@mui/material";
import Heading from "@ui/Heading";
import IconLink from "@ui/IconLink";

const UnderConstructionPage = () => {
  return (
    <Grid className="!mx-auto flex h-full w-[80%] flex-col items-center !justify-center gap-10">
      <Heading className="text-center">
        <span className="text-g-purple animate-pulse">You</span> are far, far
        from <span className="text-g-purple animate-pulse">normal</span>!
      </Heading>
      <Heading as="h2" className="text-center">
        And soon a far, far from normal website will be here...
      </Heading>
      <p className="text-xl font-extrabold">
        While you wait for the website, check me on:
      </p>
      <Grid className="flex items-center justify-between gap-10">
        <Heading as="h3">
          <IconLink to="https://www.tiktok.com/@gwennsdayttv" target="_blank">
            <IconCustom
              icon={faTiktok}
              className="bg-g-purple text-g-blue hover:shadow-g-shadow hover:bg-g-purple-dark hover:text-g-gray-light !h-[48px] !w-[48px] rounded-lg !p-2 !transition-all !duration-300 hover:scale-[110%]"
            />
          </IconLink>
        </Heading>
        <Heading as="h3">
          <IconLink to="https://www.twitch.tv/gwennsday" target="_blank">
            <IconCustom
              icon={faTwitch}
              className="bg-g-purple text-g-blue hover:shadow-g-shadow hover:bg-g-purple-dark hover:text-g-gray-light !h-[48px] !w-[48px] rounded-lg !p-2 !transition-all !duration-300 hover:scale-[110%]"
            />
          </IconLink>
        </Heading>
        <Heading as="h3">
          <IconLink
            to="https://www.snapchat.com/add/gwennsday?share_id=IRLkFUwW0B4&locale=en-US"
            target="_blank"
          >
            <IconCustom
              icon={faSnapchat}
              className="bg-g-purple text-g-blue hover:shadow-g-shadow hover:bg-g-purple-dark hover:text-g-gray-light !h-[48px] !w-[48px] rounded-lg !p-2 !transition-all !duration-300 hover:scale-[110%]"
            />
          </IconLink>
        </Heading>
        <Heading as="h3">
          <IconLink to="https://www.youtube.com/@gwennsday" target="_blank">
            <IconCustom
              icon={faYoutube}
              className="bg-g-purple text-g-blue hover:shadow-g-shadow hover:bg-g-purple-dark hover:text-g-gray-light !h-[48px] !w-[48px] rounded-lg !p-2 !transition-all !duration-300 hover:scale-[110%]"
            />
          </IconLink>
        </Heading>
      </Grid>
    </Grid>
  );
};

export default UnderConstructionPage;
