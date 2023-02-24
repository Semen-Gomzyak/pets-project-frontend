import axios from 'axios';
// axios.defaults.baseURL = 'https://pets-project-backend.onrender.com/api';

export const getFavoriteNoticesByUser = async userId => {
  try {
    const response = await axios.get(`/notices/${userId}/favorites}`);
    console.log('favorites for page', response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
