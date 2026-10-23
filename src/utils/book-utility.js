//It is used because we're using Vite
//So that it can work after deployment

function getImgUrl(name) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}
export { getImgUrl };
