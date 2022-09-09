import Notiflix from 'notiflix';
import PhotoApiService from './photo-service';
import photoCard from './partials/photocard.hbs';

const serchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');
const galleryContainer = document.querySelector('.gallery');

const photoApiService = new PhotoApiService();
console.log(photoApiService);

serchForm.addEventListener(`submit`, onSerch);
loadMoreBtn.addEventListener(`click`, onLoadMore);

function onSerch(e) {
    e.preventDefault();

    photoApiService.query = e.currentTarget.elements.query.value;

    if (photoApiService.query === '') {
        return alert()
    }
    
    photoApiService.resetPage();
    photoApiService.fetchArticles().then(hits => {
        clearGalleryContainer();
        appendMarkup(hits);
    });
};

function onLoadMore() {
    photoApiService.fetchArticles().then(appendMarkup);
};

function appendMarkup(hits) {
    galleryContainer.insertAdjacentHTML('beforeend', photoCard(hits)); 
};

function clearGalleryContainer() {
    galleryContainer.innerHTML = ``;
}

  