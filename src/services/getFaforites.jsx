import axios from 'axios';

export const getFavoriteNoticesByUser = async ({ userId }) => {
  try {
    const response = await axios.get(`/notices/${userId}/favorites}`);
    console.log('favorites for page', response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
