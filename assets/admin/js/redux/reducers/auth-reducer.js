const initialState = {
  isLoggedIn: false,
};

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGGING":
      return { ...state, isLoggedIn: payload };
    case "LOGOUT":
      return { ...state, isLoggedIn: payload };
    default:
      return state;
  }
};

export { AuthReducer };
