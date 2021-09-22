const navs = [
  {
    _tag: "CSidebarNavItem",
    name: "Inicio",
    to: "/dashboard",
    icon: "bi-dashboard",
    _role: "ROLE_DASHBOARD",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Seguridad",
    to: "/security",
    icon: "bi-person-circle",
    _role: "ROLE_SECURITY",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Usuarios",
        to: "/security/users",
        _role: "ROLE_SECURITY_USER",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Perfiles",
        to: "/security/profiles",
        _role: "ROLE_SECURITY_PROFILE",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Atractivos turísticos",
    to: "/attractive-places",
    icon: "bi-dashboard",
    _role: "ROLE_ATTRACTIVE_PLACE",
  },
];

const session = JSON.parse(localStorage.getItem("session"));
const roles = session.roles;
const _navs = [];

navs.map((item) => {
  if (roles.includes(item._role)) {
    if (item.hasOwnProperty("_children")) {
      let _children = [];

      item._children.map((child) => {
        if (roles.includes(child._role)) {
          _children.push(child);
        }
      });

      item._children = _children;

      _navs.push(item);
    } else {
      _navs.push(item);
    }
  }
});

export { _navs as navs };
