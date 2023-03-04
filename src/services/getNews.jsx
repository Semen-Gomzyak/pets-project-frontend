const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getNews = async ( page = 1, limit = 5 ) => {
  const listNews = await fetch(
    `${BASE_URL}api/news?page=${page}&limit=${limit}`
  );

  return listNews.json();
};
