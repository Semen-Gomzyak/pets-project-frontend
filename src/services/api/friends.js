import axios from 'axios';
// const { REACT_APP_BASE_URL } = process.env;

export const getFriends = async () => {
  // return axios.get(`${REACT_APP_BASE_URL}/api/services`);
  return axios.get(`/services`);
};

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
// console.log(axios.defaults.baseURL);

// export const getFriends = async () => {
//   const response = await axios.get(`services`);
//   return response.data;
// };
