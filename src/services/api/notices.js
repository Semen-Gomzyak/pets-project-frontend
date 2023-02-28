import axios from 'axios';

axios.defaults.baseURL = 'https://pets-project-backend.onrender.com/api';

const DEFAULT_LIMIT = 30;

export const getNoticeById = async _id => {
  try {
    return await axios.get(`/notices/${_id}`);
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message);
  }
};

export const getNoticeByCategoryAndTitle = async ({
  category,
  title,
  page = 1,
  limit = DEFAULT_LIMIT,
}) => {
  const response = await axios.get(
    `/notices/category/${category}/${title}?page=${page}&limit=${limit}`
  );
  // При успешном запросе возвращаем промис с данными
  return response.data.filteredNotices;
};
