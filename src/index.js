import Notiflix from 'notiflix';
import PhotoApiService from './photo-service';
import PhotoApiService from './photo-service';

const serchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');

const photoApiService = new PhotoApiService();

serchForm.addEventListener(`submit`, onSerch);
loadMoreBtn.addEventListener(`click`, onLoadMore);

function onSerch(e) {
    e.preventDefault();

    photoApiService.query = e.currentTarget.elements.searchQuery.value;
    photoApiService.resetPage();
    photoApiService.fetchArticles();
};

function onLoadMore() {
    photoApiService.fetchArticles();
}


  