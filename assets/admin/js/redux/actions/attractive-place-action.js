import api from "../../apis/attractive-place";

const AttractivePlaceAction = {
  list: (criteria = [], orderBy = false, limit = false, offset = false) => {
    return async (dispatch) => {
      try {
        const res = await api.list(criteria, orderBy, limit, offset);

        dispatch({
          type: "LIST",
          payload: res.content,
        });

        return res;
      } catch (err) {
        throw err;
      }
    };
  },
  show: (id) => {
    return async (dispatch) => {
      try {
        const res = await api.show(id);

        dispatch({
          type: "SHOW",
          payload: res.content,
        });

        return res;
      } catch (err) {
        throw err;
      }
    };
  },
  save: (data) => {
    return async (dispatch) => {
      try {
        const res = await api.save(data);

        dispatch({
          type: "SAVE",
          payload: res.content,
        });

        return res;
      } catch (err) {
        throw err;
      }
    };
  },
  edit: (id, data) => {
    return async (dispatch) => {
      try {
        const res = await api.edit(id, data);

        dispatch({
          type: "EDIT",
          payload: res.content,
        });

        return res;
      } catch (err) {
        throw err;
      }
    };
  },
  remove: (id) => {
    return async (dispatch) => {
      try {
        const res = await api.remove(id);

        dispatch({
          type: "REMOVE",
          payload: res.content,
        });

        return res;
      } catch (err) {
        throw err;
      }
    };
  },
  clean: () => {
    return async (dispatch) => {
      try {
        dispatch({
          type: "CLEAN",
        });
      } catch (err) {
        throw err;
      }
    };
  },
};

export { AttractivePlaceAction };
