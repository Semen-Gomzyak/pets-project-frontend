import axios from 'axios';
// axios.defaults.baseURL = 'https://pets-project-backend.onrender.com/api';

export const getFavoriteNoticesByUser = async userId => {
  try {
    const response = await axios.get(`/notices/${userId}/favorites`);
    console.log('favorites for page', response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllNoticesForOwners = async () => {
  try {
    const response = await axios.get(`/notices`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
