import unsplash from "../../api";
import appendPhotos from "./appendPhotos";

export default page => async dispatch => {
  try {
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
    dispatch(appendPhotos(latestPhotos));
  } catch (error) {
    console.log("error", error);
  }
};
