// import 
const BASE_URL = 'https://callboard-backend.herokuapp.com/';

//const user = {
//  email: 'cat@gmail.com',
//  password: '12345', 
//};


//регистрация
export default async function addregisterUser() {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    
    const response = await fetch(`${BASE_URL}auth/register`,options);
  const responseJson = await response.json();
  return responseJson
}

  //авторизация
  export  async function fetchAuthorisLogin() {
    const options = {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json',
  },
}
    const response = await fetch(`${BASE_URL}auth/login`,options);
    const responseJson = await response.json();
    return  localStorage.setItem('key', `${responseJson.accessToken}`);

}; 






  
        
    



// .then(localStorage.setItem('token', response.json().accessToken))

// pm.sendRequest({
//     url: `${BASE_URL}auth/login`,
//     method: "POST",
//     header: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(user),
    
// }, function (err, res) {
//     pm.environment.set("authorization", "Bearer " + res.json().token);
// });

// // "Authorization": "Bearer {{token}}",