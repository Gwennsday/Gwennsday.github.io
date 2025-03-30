import indexRoute from "@routes/index-route";
import rootRoute from "@routes/root-route";
import { createRouter } from "@tanstack/react-router";

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({
  routeTree,
});

export default router;
