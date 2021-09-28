const initialState = {
  data: [],
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LIST":
      return { ...state, data: payload };
    case "SHOW":
      return { ...state, item: payload };
    case "SAVE":
      return { ...state, data: [payload, ...state.data] };
    case "EDIT":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === payload.id ? (item = payload) : item
        ),
        item: payload,
      };
    case "REMOVE":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== payload.id),
      };
    case "CLEAN":
      return { data: [], item: undefined };
    default:
      return state;
  }
};

export { UserReducer };
