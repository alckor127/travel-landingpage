import api from "../../apis/authentication";

const AuthAction = {
  login: (username, password) => {
    return async (dispatch) => {
      try {
        const res = await api.login(username, password);

        dispatch({
          type: "LOGGING",
          payload: res.content ? true : false,
        });

        return res;
      } catch (err) {
        return err;
      }
    };
  },
};

export { AuthAction };
