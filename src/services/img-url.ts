import placeholderImg from "../assets/placeholder-image.jpeg";

const getImageCroppedUrl = (url: string) => {
  if (!url) return placeholderImg;
  const index = url.indexOf("media/") + "media/".length;
  const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return newUrl;
};

export default getImageCroppedUrl;
