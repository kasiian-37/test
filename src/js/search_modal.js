export default openAndCloseSearchModal()

function openAndCloseSearchModal() {
  const refs = {
    openModalBtn: document.querySelector('[data-search-open]'),
    closeModalBtn: document.querySelector('[data-search-close]'),
    modal: document.querySelector('[data-search-modal]'),
  };

  refs.openModalBtn.addEventListener('click', onClickOpenModal);
  refs.closeModalBtn.addEventListener('click', onClickCloseModal);


  function onClickOpenModal() {
    window.addEventListener("keydown", onKeyDown);
    refs.modal.addEventListener("click", onOverlayClick);
    refs.modal.classList.remove("is-hidden");
  }

  function onClickCloseModal() {
    window.removeEventListener("keydown", onKeyDown);
    refs.modal.removeEventListener("click", onOverlayClick);
    refs.modal.classList.add("is-hidden");
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
}
