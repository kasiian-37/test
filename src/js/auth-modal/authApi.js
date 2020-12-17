import axios from 'axios';

export const BASE_URL = 'https://callboard-backend.herokuapp.com';

export const registerUser = userData => {
  const { email, password } = userData;

return axios.post(`${BASE_URL}/auth/register`, { email, password });
}

export const loginUser = userData => {
  const { email, password } = userData;

  return axios.post(`${BASE_URL}/users/login`, {email, password });
}


// export async function fetchRegistration(url, dataRegistry) {
//   const options = {
// method: 'POST',
// body: JSON.stringify(dataRegistry),
// headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
    
// },
// }
//   const response = await fetch(`${url}auth/register`,options);
//   const responseJson = await response.json();
//   return responseJson
// };

export async function fetchAuthenticationLogin(url, dataRegistry) {
  const options = {
method: 'POST',
body: JSON.stringify(dataRegistry),
headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'accept': 'application/json',
},
}
  const response = await fetch(`${url}auth/login`,options);
  const responseJson = await response.json();
  return  responseJson

};