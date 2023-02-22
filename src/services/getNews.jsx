const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = 'https://pets-project-backend.onrender.com';

export const getNews = async ({ page = 1, limit = 6 }) => {
  const listNews = await fetch(
    `${BASE_URL}api/news?page=${page}&limit=${limit}`
  );
  return listNews.json();
  // try {
  //   const listNews = await axios.get('/api/news?page=${page}&limit=${limit}');
  //   return listNews.data;
  // } catch (error) {
  //   console.log(error.message);
  // }
};