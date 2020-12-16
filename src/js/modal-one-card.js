import openCard from '../templates/modal-one-card.hbs';


const refs = {
    openModalBtn: document.querySelectorAll('.product-card-icon-fullscreen'),
    // parentCloseModalBtn: document.querySelector('.open-card'),
    сloseModalBtn: document.querySelector('.close-form'),
    modal: document.querySelector('[data-modal]'),
    cont: document.getElementsByTagName('.open-card'),

  };

refs.openModalBtn.forEach(icon =>
  icon.addEventListener("click", onClickOpenModal)
);


function onClickOpenModal(ev) {

  ev.preventDefault();

    try {
        refs.cont.insertAdjacentHTML("afterbegin", openCard());
    window.addEventListener("keydown", onKeyDown);
    refs.modal.addEventListener("click", onOverlayClick);
      refs.modal.classList.remove("is-hidden");

    }

    catch (error) {
        console.log(error);
    }

}

console.log('refs.cont=', refs.cont);

refs.cont.addEventListener('click', onClickCloseModal);

function onClickCloseModal(e) {
  e.preventDefault();

  if (e.target.classList.contains("close-form")) {
    console.log('what');
    }
    // refs.openModalBtn.forEach(icon =>
    //     icon.removeEventListener("click", onClickOpenModal)
    // );
    // console.log('todo1');
    // window.removeEventListener("keydown", onKeyDown);
    //   refs.modal.removeEventListener("click", onOverlayClick);
    //   modal.remove();

    // refs.modal.classList.add("is-hidden");
  }

  function onOverlayClick(event) {
    if (event.currentTarget === event.target) {
      onClickCloseModal()
    }
  }

  function onKeyDown(event) {
    if (event.code === "Escape") {
      onClickCloseModal()
    }
}