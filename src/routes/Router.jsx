import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboardhome from "../components/dashboard/Dashboardhome";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Pricing from "../pages/Pricing";
import Coverage from "../pages/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "coverage",
        Component: Coverage,
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path: "pricing",
        Component: Pricing,
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "sign-in",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    Component: DashboardLayout,
    children: [
      {
        path: "home",
        Component: Dashboardhome,
      },
    ],
  },
]);
