import axios from 'axios';

export const getFriends = async (page, limit) => {
  return axios.get(`/services?page=${page}&limit=${limit}`);
};
