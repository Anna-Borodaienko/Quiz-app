export const getCurrentPage = (): number => {
  const url = window.location.href.split('/').at(-1);
  let currentPage = 0;
  if (!url) {
    currentPage = 1;
  } else if (url && typeof +url === 'number') {
    currentPage = +url;
  }
  return currentPage;
};
