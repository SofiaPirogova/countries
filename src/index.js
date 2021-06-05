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

