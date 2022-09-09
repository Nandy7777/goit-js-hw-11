import Notiflix from 'notiflix';
import PhotoApiService from './photo-service';
import PhotoApiService from './photo-service';

import photoCard from './partials/photocard.hbs';

const serchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');

const photoApiService = new PhotoApiService();
console.log(photoApiService);

serchForm.addEventListener(`submit`, onSerch);
loadMoreBtn.addEventListener(`click`, onLoadMore);

function onSerch(e) {
    e.preventDefault();

    photoApiService.query = e.currentTarget.elements.query.value;
    photoApiService.resetPage();
    photoApiService.fetchArticles().then(hits => console.log(hits));
};

function onLoadMore() {
    photoApiService.fetchArticles().then(hits => console.log(hits));
}


  