import Home from "pages/home/Home";
import { CustomRoute } from "models/bases";
import About from "pages/about/About";

export const homeRoutes: CustomRoute = {
  path: "/",
  name: "home",
  component: Home,
  children: [
    {
      path: "",
      name: "Home",
      component: Home,
    },
    {
      path: "about",
      name: "About",
      component: About,
    },
  ],
};
