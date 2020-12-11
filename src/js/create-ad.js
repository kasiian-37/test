import createAdMarkupTpl from '../templates/modal-create-ad.hbs'
const openModalCreateAdBtn = document.querySelector('[data-create-ad-modal-open]');
const closeModalCreateADBtn = document.querySelector('[data-create-ad-modal-close]');
const createAdModalRef = document.querySelector('[data-create-ad-modal]');
console.log(openModalCreateAdBtn)



openModalCreateAdBtn.addEventListener('click', openModalCreateAd);
closeModalCreateADBtn.addEventListener('click', closeModalCreateAd)

function openModalCreateAd() {
    
    window.addEventListener("keydown", onKeyDown);
    createAdModalRef.addEventListener("click", onOverlayClick);
    createAdModalRef.classList.remove("is-hidden");
}

function closeModalCreateAd() {
    window.removeEventListener("keydown", onKeyDown);
    createAdModalRef.removeEventListener("click", onOverlayClick);
    createAdModalRef.classList.add("is-hidden");
}

function onOverlayClick(event) {
    if (event.currentTarget === event.target) {
      closeModalCreateAd()
    }
}
  
function onKeyDown(event) {
    if (event.code === "Escape") {
      closeModalCreateAd()
    }
}

