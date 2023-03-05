import axios from 'axios';

export const nameSpace = '';
export const baseURL = 'http://3.34.234.124:8080';

const initAxios = () => {
  const defaultClient = axios.create({
    baseURL,
  });

  return defaultClient;
};

export default initAxios;
