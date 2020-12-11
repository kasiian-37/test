// import { template } from 'handlebars';
import oneCard from '../templates/product-cards.hbs';
import allCategory from '../templates/all-category.hbs';
import test from '../test.json';

// {{>./cardset}}
// console.log(`111`);
// console.log(allCategory);
// console.log(test);

// const mainContainerRef = document.querySelector('.main-container');
// const productCardGroupRef = document.querySelector('.product-card-group');

// console.log(mainContainerRef);

// productCardGroupRef.insertAdjacentHTML('beforeend', oneCard(test));
// mainContainerRef.innerHTML = oneCard(test);


/* карусель!! */
/* этот код помечает картинки, для удобства разработки */
const carouselRefLi = document.querySelectorAll('.product-card');

let i = 1;
for(let li of carouselRefLi) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

/* конфигурация */
let width = 150; // ширина картинки
let count = 2; // видимое количество изображений

// let list = carousel.querySelector('ul');
const list = document.querySelector('.product-card');
// let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки
const prevRef = document.querySelector('.prev');

prevRef.onclick = function() {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

const nextRef = document.querySelector('.next');
nextRef.onclick = function() {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (carouselRefLi.length - count));
    list.style.marginLeft = position + 'px';
};
    