import PropTypes from "prop-types";

export const colorPropType = PropTypes.oneOfType([
  PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light",
  ]),
  PropTypes.string,
]);
