const AuthAction = {
  login: (username, password) => {
    return async (dispatch) => {
      try {
        dispatch({
          type: "LOGGING",
          payload: true,
        });

        return { status: 200, message: "" };
      } catch (err) {
        return err;
      }
    };
  },
};

export { AuthAction };
