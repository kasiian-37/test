import axios from 'axios';

// const BASE_URL = 'https://callboard-backend.herokuapp.com';

export const registerUser = userData => {
  const { email, password } = userData;

  return axios.post(`https://callboard-backend.herokuapp.com/auth/register`, { email, password });
}

export const loginUser = userData => {
  const { email, password } = userData;

  return axios.post(`https://callboard-backend.herokuapp.com/users/login`, {email, password });
}
