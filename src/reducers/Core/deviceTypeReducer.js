const defaultState = 3;

// device types 3 - desktop, 2 - laptop, 1 - mobile

export default (state = defaultState, action) => {
  if (action.type === "UPDATE_DEVICE_TYPE") {
    return action.payload;
  }
  return state;
};
