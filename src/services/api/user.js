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
    const response = await axios.put(`/users/update`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message);
  }
};

export const deleteUserPet = async (id, token) => {
  try {
    const response = await axios.delete(`/pets/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message);
  }
};

export const uploadAvatar = async (file, token) => {
  try {
    const response = await axios.post(
      'users/avatars',
      { avatar: file },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message);
  }
};

export const addNewPet = async (newPet, token) => {
  try {
    const response = await axios.post('/pets', newPet, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message);
  }
};
