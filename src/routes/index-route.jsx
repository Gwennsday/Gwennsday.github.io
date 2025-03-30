import SETTINGS from "@constants/settings";
import IndexPage from "@pages/IndexPage";
import UnderConstruction from "@pages/UnderConstructionPage";
import rootRoute from "@routes/root-route";
import { createRoute } from "@tanstack/react-router";

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () =>
    SETTINGS.isUnderConstruction ? <UnderConstruction /> : <IndexPage />,
  head: () => ({
    meta: [
      {
        title: `It's Gwennsday, my dudes!`,
      },
    ],
    links: {
      rel: "icon",
      href: "/img/favicon.png",
    },
  }),
});

export default indexRoute;
