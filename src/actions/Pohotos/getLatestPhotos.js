import unsplash from "../../api";
import appendPhotos from "./appendPhotos";

export default page => async dispatch => {
  try {
    console.log("from gome", page);

    const response = await unsplash("/photos", {
      params: {
        page
      }
    });
    const latestPhotos = response.data;
    dispatch(appendPhotos(latestPhotos));
  } catch (error) {
    console.log("there is an error", error);
  }
};
