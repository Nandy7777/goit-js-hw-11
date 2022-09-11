import Notiflix from 'notiflix';
import PhotoApiService from './photo-service';
import photoCard from './partials/photocard.hbs';
import LoadMoreBtn from './load-more-btn';

const serchForm = document.querySelector('#search-form');
// const loadMoreBtn = document.querySelector('.load-more');
const galleryContainer = document.querySelector('.gallery');

const loadMoreBtn = new LoadMoreBtn({
    selector: '.load-more',
    hidden: true,

});

const photoApiService = new PhotoApiService();
console.log(photoApiService);

console.log(loadMoreBtn)
serchForm.addEventListener(`submit`, onSerch);
loadMoreBtn.refs.button.addEventListener(`click`, fetchArticles);

function onSerch(e) {
    e.preventDefault();
    photoApiService.query = e.currentTarget.elements.query.value;
    if (photoApiService.query === '') {
        return alert()
    }
    loadMoreBtn.show();
    photoApiService.resetPage();
    clearGalleryContainer();
    fetchArticles();
};

function fetchArticles() {
    loadMoreBtn.disable();
    photoApiService.fetchArticles().then(hits => {
        appendMarkup(hits);
        loadMoreBtn.enable();
    });   
}

function appendMarkup(hits) {
    galleryContainer.insertAdjacentHTML('beforeend', photoCard(hits)); 
}

function clearGalleryContainer() {
    galleryContainer.innerHTML = ``;
}

  