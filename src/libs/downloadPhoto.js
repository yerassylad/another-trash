import unsplash from "../api";

export default photoID => async () => {
  // track photo download
  const response = await unsplash({
    method: "get",
    url: `/photos/${photoID}/download`
  });
  // trying download by response url
  const url = response.data.url;
  const loader = document.createElement("a");
  loader.style.display = "none";
  loader.href = url;
  loader.setAttribute("download", "no-name");
  loader.setAttribute("target", "_blank");
  document.body.appendChild(loader);
  loader.click();
  document.body.removeChild(loader);
};
