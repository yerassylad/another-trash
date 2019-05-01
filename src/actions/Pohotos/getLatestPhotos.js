import unsplash from "../../api";
import fetchPhotosBegin from "./fetchPhotosBegin";
import fetchPhotosFailure from "./fetchPhotosFailure";
import fetchPhotosSuccess from "./fetchPhotosSuccess";

export default page => async dispatch => {
  try {
    dispatch(fetchPhotosBegin());
    const response = await unsplash({
      method: "get",
      url: "/photos",
      params: {
        page,
        per_page: 10,
        order_by: "latest"
      }
    });
    const latestPhotos = response.data;
    dispatch(fetchPhotosSuccess(latestPhotos));
  } catch (error) {
    dispatch(fetchPhotosFailure(error));
  }
};
