import React from "react";

const Dashboard = React.lazy(() => import("../views/dashboard"));
const AttractivePlaces = React.lazy(() => import("../views/attractive-places"));

const routes = [
  { path: "/dashboard", exact: true, name: "Inicio", component: Dashboard },
  {
    path: "/attractive-places",
    exact: true,
    name: "Atractivos turísticos",
    component: AttractivePlaces,
  },
];

export { routes };
