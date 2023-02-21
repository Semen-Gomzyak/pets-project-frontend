import axios from 'axios';

export const getUserInfo = async token => {
  try {
    return await axios.get(`http://localhost:3000/api/users/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message);
  }
};

export const updateUserData = async (event, _id, token, userData) => {
  event.preventDefault();
  const key = event.target.getAttribute('data-name');

  try {
    await axios.patch(
      `http://localhost:3000/api/users/update`,
      { [key]: userData[key] },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message);
  }
};
