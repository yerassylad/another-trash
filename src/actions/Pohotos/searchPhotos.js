import unsplash from "../../api";
import fetchPhotosBegin from "./fetchPhotosBegin";
import fetchPhotosSuccess from "./fetchPhotosSuccess";
import fetchPhotosFailure from "./fetchPhotosFailure";

export default (query, page) => async dispatch => {
  try {
    dispatch(fetchPhotosBegin());
    const response = await unsplash({
      method: "get",
      url: "/search/photos",
      params: {
        query,
        page,
        per_page: 10
      }
    });
    const foundPhotos = response.data.results;
    dispatch(fetchPhotosSuccess(foundPhotos));
  } catch (error) {
    dispatch(fetchPhotosFailure(error));
  }
};
