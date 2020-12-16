
import openCabinet from '../templates/cabinet.hbs';

// const main = document.querySelector('.section')
// const refs = {
//     openCabinetBtn: document.querySelector('[open-modal-cabinet]'),
//     myList:document.querySelector(my-cabinet)
//     // сloseModalBtn: document.querySelector('.close-form'),
//     // modal: document.querySelector('[data-modal]'),
//     // cont: document.getElementsByTagName('.open-card'),

//   };

// refs.openCabinetBtn.addEventListener("click", onClickOpenModal);

// refs.myList.insertAdjacentHTML("afterbegin", openCabinet());
// function onClickOpenModal(ev) {

//   ev.preventDefault();

//     try {
//         refs.cont.insertAdjacentHTML("afterbegin", openCabinet());
//     // window.addEventListener("keydown", onKeyDown);
//     // refs.modal.addEventListener("click", onOverlayClick);
//     //   refs.modal.classList.remove("is-hidden");

//     }

//     catch (error) {
//         console.log(error);
//     }

// }
const cabinetRef = document.querySelector('.main-container');

// фэч
export const fetchmyOffice = () => {
  return axios(`${BASE_URL}user`);
}
// рендер
const renderCabinetList = async () => {
  try {
    const response = await fetchmyOffice();
    const { data } = response;

    cabinetRef.innerHTML = openCabinet(data);
  } catch (error) {
    pushError(
      'Помилка!',
    );
  }
};


const token = localStorage.getItem('token');

if(token) {
  renderCabinetList()
} else {
  window.location.href = '/registration.html'
}