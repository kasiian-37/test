import favoriteCardTpl from'../templates/favorite-cards.hbs';

const refs = {
    addFavoriteBtn: document.querySelector('.product-card-icon-favorite'),
    removeFavoriteBtn: document.querySelector('.product-card-icon-favorite-user')
}

refs.addFavoriteBtn.addEventListener('click', addFavoriteCard);
//refs.removeFavoriteBtn.addEventListener('click', removeFavoriteCard);

const newFavorites = {
      "title": "Tesla Model X",
      "imageUrls": [
        "string"
      ],
      "description": "New tesla",
      "category": "Transport",
      "price": 1500000,
      "oldPrice": 1750000,
      "isOnSale": true,
      "discountPercents": 14.28571428571429,
      "phone": "+380000000000",
      "_id": "507f1f77bcf86cd799439013",
      "__v": 0
    }

  //Добавление в избранное
function addFavoriteCard(e) { 
   
    const options = {
    method:'POST',
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(favorite),
    };
    return fetch(`${BASE_URL}/call/favourite/{callId}?callId=${id}`, options)
    .then(response => response.json())
    .then(renderAddFavoriteCard(id)) //можно рисовать .then(renderAddFavoriteCard)
    .catch(error => console.log('error', error));
}

function renderAddFavoriteCard(id){
     //refs.ELEMENT.insertAdjacentHTML('beforeend', favoriteCardTpl(id))
}

//Удаление из избранного
function removeFavoriteCard(e) { 
    const options = {
        method:'DELETE'  
    };
    return fetch(`${BASE_URL}/call/favourite/{callId}?callId=${id}`, options)
    .then(response => response.json())
    .then(renderRemoveFavoriteCard(id)) //можно рисовать .then(renderRemoveFavoriteCard)
    .catch(error => console.log('error', error));
}

function renderRemoveFavoriteCard(id){
 //refs.ELEMENT.remove(id)
}

//получение избранных товаров пользователя
function getFavoriteCard(){
    return fetch(`${BASE_URL}/call/favourite/{callId}`)
    .then(response => response.json())
    .then(renderFavoriteCard(favorite)) //можно рисовать .then(renderFavoriteCard)
    .catch(error => console.log('error', error));
}

function renderFavoriteCard(favorite){
//refs.ELEMENT.insertAdjacentHTML('beforeend', favoriteCardTpl(id))
}
