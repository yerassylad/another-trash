const defaultState = {
  fetched: false,
  fetching: false,
  dirty: false,
  error: null,
  page: 1,
  photos: []
};

export default (state = defaultState, action) => {
  if (action.type === "FETCH_PHOTOS_BEGIN") {
    return {
      ...state,
      fetching: true,
      fetched: false
    };
  }
  if (action.type === "FETCH_PHOTOS_SUCCESS") {
    return {
      ...state,
      fetching: false,
      fetched: true,
      dirty: true,
      photos: [...state.photos, ...action.payload]
    };
  }
  if (action.type === "FETCH_PHOTOS_FAILURE") {
    return {
      ...state,
      fetching: false,
      error: action.payload
    };
  }
  if (action.type === "INCREMENT_PAGE") {
    return {
      ...state,
      page: state.page + 1
    };
  }
  if (action.type === "DEFAULT_PHOTOS") {
    return defaultState;
  }
  return state;
};
