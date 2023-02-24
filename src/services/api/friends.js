import axios from 'axios';
// const { REACT_APP_BASE_URL } = process.env;

export const getFriends = async (page, limit) => {
  // return axios.get(`${REACT_APP_BASE_URL}/api/services`);
  return axios.get(`/services?page=${page}&limit=${limit}`);
};
