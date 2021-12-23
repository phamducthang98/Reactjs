import Home from "pages/home/Home";
import { CustomRoute } from "models/bases";
import About from "pages/about/About";
import Dashboard from "pages/_admin/dashboard/Dashboard";

export const adminHomeRoutes: CustomRoute = {
  path: "/admin",
  name: "home",
  component: Dashboard,
  children: [
    {
      path: "admin",
      name: "Home",
      component: Dashboard,
    },
    {
      path: "about",
      name: "About",
      component: About,
    },
  ],
};
