export const receiveCurrentPageNr = (): number => {
  const url = window.location.href.split("/").at(-1);
  let pageNr = 0;
  if (url && typeof(+url) === "number") {
    pageNr = +url;
  } else if (!url) {
    pageNr = 1
  }
  return pageNr;
};
