import { loginUser } from './authApi';
import { pushError } from './pnotify';

const loginFormRef = document.querySelector('auth-form');
export const submitHandler = async event => {
  event.preventDefault();
  
  const { currentTarget: form } = event;
  const formData = new FormData(form);
  const body = {};

  formData.forEach((value, key) => {
    body[key] = value;
  });

  console.log(body);

  try {
    const { response } = await loginUser(body);
    sessionStorage.setItem('accessToken', response.accessToken);
    sessionStorage.setItem('refreshToken', response.refreshToken);
    sessionStorage.setItem('sid', response.sid);
  }
  catch (error) {
    pushError(
      'Помилка!',
    );
  }
  
  
}

loginFormRef.addEventListener('submit', submitHandler)

export default async function loginSubmit(log) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(log),
  };

  try {
    await fetch(
      'https://callboard-backend.herokuapp.com/auth/login',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        if (result.message === 'Password is wrong') {
          pushError(result.message);
        } else if (
          result.message ===
          `User with ${
            JSON.parse(requestOptions.body).email
          } email doesn't exist`
        ) {
          pushError(result.message);
        } else if (result.message === '"email" is not allowed to be empty') {
          pushError(result.message);
        } else if (result.message === '"password" is not allowed to be empty') {
          pushError(result.message);
        } else {
          sessionStorage.setItem('token', result.accessToken);
          sessionStorage.setItem('sid', result.sid);
          sessionStorage.setItem('refresh', result.refreshToken);
          // document.getElementById('auth-form').reset();
          return result.user;
        }
      })
     
  } catch (error) {
    console.log('error', error);
  }
}