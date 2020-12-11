
import addregisterUser from './apiService';


const registerFormRef = document.querySelector('.auth-modal'); // к чему прикрутить чтобы проверить?
const handleRegisterSubmit = event => {
  event.preventDefault();

  const { currentTarget: form } = event;
  const formData = new FormData(form);
  const body = {};

  formData.forEach((value, key) => {
    body[key] = value;
  });

  addregisterUser(body)
    .then(({ data }) => console.log(data))
    .catch(error => {
      alert({
        text: error.response.data.message,
      });
    });
};
registerFormRef.addEventListener('button-gray', handleRegisterSubmit); // к чему прикрутить чтобы проверить