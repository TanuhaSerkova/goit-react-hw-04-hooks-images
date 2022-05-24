import axios from 'axios';

const API_KEY = '26450083-12ef3a42d85dc86da2bddbc48';
const BASE_URL = 'https://pixabay.com';

export const fetchData = (query, page, perPage) => {
  return axios
    .get(
      `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data);
};
