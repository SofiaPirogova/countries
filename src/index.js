import css from "./css/styles.css";
import normalize from "./css/modern-normalize.css";
import modalCss from "./css/modal.css";
import refs from "./js/refs.js";
import arr from "./db/countries.json";
import searchItemTamplate from "./template/countrySearchItem.hbs";
import modalItemTemplate from "./template/modalCountryItem.hbs";
console.log('arr', arr);

const { searchForm, searchResults, coutriesList, modal, modalContent } = refs;
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target);
    // console.dir(e.target);
    // console.log(e.target.elements.search.value);
    let search = e.target.elements.search.value.toLocaleLowerCase();
    let country = arr.filter(elem => elem.name.toLocaleLowerCase().includes(search));
    console.log(country);
    let items = searchItemTamplate(country);
    console.log(items);
    searchResults.insertAdjacentHTML('afterbegin', items);
    // вешаем слушатель событий
    console.log(searchResults);
    // массив нормальный не псевдоколлекцию делаем
    console.log([...searchResults.children]);
    [...searchResults.children].forEach(elem => {
        elem.addEventListener('click', (e) => {
            // трим убирает пробелы в результате запроса по бокам
            console.log(e.target.textContent.trim());
            let search = e.target.textContent.trim();
            let country = arr.filter(elem => elem.name === search);
            console.log(country);

            let items = modalItemTemplate(country);
            console.log(items);

            modalContent.insertAdjacentHTML('afterbegin', items);
            modal.classList.remove('is-hidden');
        })
    })
});
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

window.addEventListener('DOMContentLoaded', (e) => {
    // вызывть шаблон countriesListTamplate передать ему массив arr , 
    // сохранить в переменную items 
    // полученную разметку из переменной items внутрь coutriesList
    // преобразовать coutriesList в массив и повесить на каждый элемент слушатель по клику, 
    // по текст контекту елемента делать фильтр массива, отфильтрованный массив передавать шаблону modalItemTamplate
    // для отрисовки информации в модальном окне.
    //  и ссылку вам) и в конце сделать npm run deploy;
})