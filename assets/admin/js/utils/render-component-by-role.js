// renderiza el componente basado en un rol,
// se le pude pasar un mensaje de error en el caso que se desee mostrar algo.

const renderComponentByRole = (role, component, errorMessage = null) => {
  const session = JSON.parse(localStorage.getItem("session"));
  const roles = session.roles;

  if (roles.includes(role)) {
    return component;
  }

  return errorMessage;
};

export default renderComponentByRole;
