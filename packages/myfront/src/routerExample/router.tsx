import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import HomeIndex from "./routes/index";
import { buildAboutRoute } from "./routes/about/routes";

const RootLayout = () => {
  return <Outlet />;
};

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomeIndex,
});

const aboutRoute = buildAboutRoute(rootRoute);

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = createRouter({ routeTree });

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
