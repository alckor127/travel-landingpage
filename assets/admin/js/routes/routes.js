import React from "react";

const Dashboard = React.lazy(() => import("../views/dashboard"));
const AttractivePlaces = React.lazy(() => import("../views/attractive-places"));
const AttractivePlaceForm = React.lazy(() =>
  import("../views/attractive-places/form")
);
const User = React.lazy(() => import("../views/security/user"));
const UserForm = React.lazy(() => import("../views/security/user/form"));

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
    name: "Atractivo turístico formulario",
    component: AttractivePlaceForm,
  },
  {
    path: "/security/users",
    exact: true,
    name: "Usuarios",
    component: User,
  },
  {
    path: ["/users/new", "/users/edit/:id(\\d+)"],
    exact: true,
    name: "Usuario formulario",
    component: UserForm,
  },
];

export { routes };
