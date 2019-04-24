const defaultState = {};

export default (state = defaultState, action) => {
  if (action.type === "UPDATE_SCREEN_SIZES") {
    return action.payload;
  }
  return state;
};
