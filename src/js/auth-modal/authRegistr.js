import { registerUser } from './authApi';
import { pushError } from './pnotify';

const registerFormRef = document.querySelector('.auth-form');
const handleRegisterSubmit = event => {
    event.preventDefault();
    
    const { currentTarget: form } = event;
    const formData = new FormData(form);
    const body = {}

    formData.forEach((value, key) => {
        body[key] = value;
    })
    registerUser(body)
        .then(({ data }) => {
            console.log(data);
            
      localStorage.setItem('token', data.token)
    })
        .catch(error => {
            console.dir(error)
            pushError(
      'Цей email вже використовується!',
    );
    });
    
};


registerFormRef.addEventListener('submit', handleRegisterSubmit);