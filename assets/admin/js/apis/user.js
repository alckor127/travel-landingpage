import axios from "./axios-config";
import serialize from "../utils/serialize";

const api = {
  list: async (
    criteria = [],
    orderBy = false,
    limit = false,
    offset = false
  ) => {
    const params = {};

    params.criteria = criteria;
    if (orderBy) params.orderBy = orderBy;
    if (limit) params.limit = limit;
    if (offset) params.offset = offset;

    try {
      const res = await axios.get(`/user?${serialize(params)}`);
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  show: async (id) => {
    try {
      const res = await axios.get(`/user/${id}`);
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  save: async (data) => {
    try {
      const res = await axios.post(`/user`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  // FormData doesn't support for the PUT method.
  edit: async (id, data) => {
    try {
      const res = await axios.post(`/user/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  remove: async (id) => {
    try {
      const res = await axios.delete(`/user/${id}`);
      return res.data;
    } catch (err) {
      throw err;
    }
  },
};

export default api;
