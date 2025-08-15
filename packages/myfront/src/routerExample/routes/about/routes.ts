import { createRoute } from "@tanstack/react-router";
import AboutLayout from "../about";
import AboutMy from "./my";
import AboutYou from "./you";

export const buildAboutRoute = (rootRoute: any) => {
  const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "about",
    component: AboutLayout,
  });

  const aboutMyRoute = createRoute({
    getParentRoute: () => aboutRoute,
    path: "my",
    component: AboutMy,
  });

  const aboutYouRoute = createRoute({
    getParentRoute: () => aboutRoute,
    path: "you",
    component: AboutYou,
  });

  aboutRoute.addChildren([aboutMyRoute, aboutYouRoute]);

  return aboutRoute;
};
