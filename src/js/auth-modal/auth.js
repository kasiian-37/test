// import registerSubm from './authRegistr';
// import loginSubmit from './authLogin';

// const registerFormRef = document.querySelector('.auth-form');

// const handleRegisterSubmit = event => {
//   event.preventDefault();

//   const { currentTarget: form } = event;
//   const formData = new FormData(form);
//   const body = {};

//   formData.forEach((value, key) => {
//     body[key] = value;
//   })
  
//   if (event.target.classList.contains('js-btn-registr')) {
//     registerSubm(body);

//   } else if (event.target.classList.contains('js-btn-login')) {
//       loginSubmit(body);  
//     }  
// }

// registerFormRef.addEventListener('click', handleRegisterSubmit)