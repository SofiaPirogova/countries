import refs from "./refs.js";
import searchItemTamplate from "../template/countrySearchItem.hbs";
import modalItemTemplate from "../template/modalCountryItem.hbs";
import arr from "../db/countries.json";

const { searchForm, searchResults, coutriesList, modal, modalContent } = refs;

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let search = e.target.elements.search.value.toLocaleLowerCase();
    let country = arr.filter(elem => elem.name.toLocaleLowerCase().includes(search));
    let items = searchItemTamplate(country);

    searchResults.insertAdjacentHTML('afterbegin', items);

    [...searchResults.children].forEach(elem => {
        elem.addEventListener('click', (e) => {
        
            let search = e.target.textContent.trim();
            let country = arr.filter(elem => elem.name === search);
          

            let items = modalItemTemplate(country);
         

            modalContent.insertAdjacentHTML('afterbegin', items);
            modal.classList.remove('is-hidden');
        })
    })
});

window.addEventListener('DOMContentLoaded', (e) => {
    // вызывть шаблон countriesListTamplate передать ему массив arr , 
    // сохранить в переменную items 
    // полученную разметку из переменной items внутрь coutriesList
    // преобразовать coutriesList в массив и повесить на каждый элемент слушатель по клику, 
    // по текст контекту елемента делать фильтр массива, отфильтрованный массив передавать шаблону modalItemTamplate
    // для отрисовки информации в модальном окне.
    //  и ссылку вам) и в конце сделать npm run deploy;
});
