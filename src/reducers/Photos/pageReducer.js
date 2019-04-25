export default (state = 1, action) => {
  if (action.type === "INCREMENT_PAGE") {
    return state + 1;
  }
  if (action.type === "TO_PAGE_ONE") {
    return 1;
  }
  return state;
};
