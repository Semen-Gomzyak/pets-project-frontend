import axios from 'axios';

axios.defaults.baseURL = 'https://pets-project-backend.onrender.com/api';

export const getNoticeById = async _id => {
  try {
    return await axios.get(`/notices/${_id}`);
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message);
  }
};
