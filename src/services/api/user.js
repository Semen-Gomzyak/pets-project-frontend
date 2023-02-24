import axios from 'axios';
import { async } from 'q';

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

export const deleteUserPet = async (id, token) => {
  try {
    await axios.delete(`/pets/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message);
  }
};

export const uploadAvatar = async (file, token) => {
  try {
    await axios.post(
      'users/avatars',
      { avatar: file },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log('uploaded');
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message);
  }
};
