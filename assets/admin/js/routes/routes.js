import React from "react";

const Dashboard = React.lazy(() => import("../views/dashboard"));
const AttractivePlaces = React.lazy(() => import("../views/attractive-places"));
const AttractivePlaceForm = React.lazy(() =>
  import("../views/attractive-places/form")
);
const User = React.lazy(() => import("../views/security/user"));

const routes = [
  { path: "/dashboard", exact: true, name: "Inicio", component: Dashboard },
  {
    path: "/attractive-places",
    exact: true,
    name: "Atractivos turísticos",
    component: AttractivePlaces,
  },
  {
    path: ["/attractive-places/new", "/attractive-places/edit/:id(\\d+)"],
    exact: true,
    name: "Atractivos turísticos formulario",
    component: AttractivePlaceForm,
  },
  {
    path: "/security/users",
    exact: true,
    name: "Usuarios",
    component: User,
  },
];

export { routes };
