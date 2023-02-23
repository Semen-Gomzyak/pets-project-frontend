import axios from 'axios';

axios.defaults.baseURL = 'https://pets-project-backend.onrender.com/api';

export const getUserData = async token => {
  try {
    return await axios.get(`/users/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message);
  }
};

export const updateUserData = async (data, token) => {
  try {
    await axios.put(`/users/update`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message);
  }
};
