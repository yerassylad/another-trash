export default (state = [], action) => {
  if (action.type === "APPEND_PHOTOS") {
    return [...state, ...action.payload];
  }
  if (action.type === "CLEAR_PHOTOS") {
    return [];
  }
  return state;
};
