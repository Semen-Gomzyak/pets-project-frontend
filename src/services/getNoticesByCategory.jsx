// const BASE_URL = 'https://pets-project-backend.onrender.com';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getNoticesByCategory = async sell => {
  const noticesList = await fetch(`${BASE_URL}api/notices/category/${sell}`);

  console.log('noticesList', noticesList);
  return noticesList.json();
};
