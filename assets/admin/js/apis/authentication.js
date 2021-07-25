import axios from "./axios-config";

const api = {
  login: async (username, password) => {
    try {
      const res = await axios.post("/login_check", { username, password });
      return res.data;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export default api;
