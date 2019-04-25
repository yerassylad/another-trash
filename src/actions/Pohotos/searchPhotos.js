import unsplash from "../../api";
import appendPhotos from "./appendPhotos";

export default (query, page) => async dispatch => {
  try {
    const response = await unsplash.get("/search/photos", {
      params: {
        query,
        page
      }
    });
    const foundPhotos = response.data.results;
    dispatch(appendPhotos(foundPhotos));
  } catch (error) {
    console.log("eroro on search photos", error);
  }
};
