import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/books/';  // ✅ corrected URL

export const getBooks = () => {
  return axios.get(API_URL);
};
