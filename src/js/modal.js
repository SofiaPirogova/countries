import refs from "./refs.js";

const {modal, modalContent } = refs;
// слушаем клавиатуру чтобы закрывать окно модальное
window.addEventListener('keydown', (e) => {
    console.log(e.code);
    if (e.code === 'Escape') {
        modal.classList.add('is-hidden');
        modalContent.innerHTML = '';

    }
});
modal.addEventListener('click', (e) => {
    console.log(e.target.id);
    if (e.target.id === 'modal') {
        modal.classList.add('is-hidden');
        modalContent.innerHTML = '';
    }
});