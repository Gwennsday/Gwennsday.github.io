import { createRootRoute, HeadContent } from "@tanstack/react-router";
import LayoutSite from "@ui/LayoutSite";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <LayoutSite />
    </>
  ),
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

export default rootRoute;
