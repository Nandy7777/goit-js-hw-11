import Notiflix from 'notiflix';
import PhotoApiService from './photo-service';
import photoCard from './partials/photocard.hbs';
import LoadMoreBtn from './load-more-btn';

const serchForm = document.querySelector('#search-form');
const galleryContainer = document.querySelector('.gallery');

const loadMoreBtn = new LoadMoreBtn({
  selector: '.load-more',
  hidden: true,
});

const photoApiService = new PhotoApiService();

serchForm.addEventListener(`submit`, onSerch);
loadMoreBtn.refs.button.addEventListener(`click`, fetchArticles);

function onSerch(e) {
    e.preventDefault();
    loadMoreBtn.show();
    photoApiService.query = e.currentTarget.elements.searchQuery.value.trim();
    photoApiService.resetPage();
    clearGalleryContainer();
    if (photoApiService.query === '') {
      loadMoreBtn.hide();
      return typeSomething();
    }
    serchForm.reset();
    fetchArticles();
}
     
function fetchArticles() {
  loadMoreBtn.hide();
  loadMoreBtn.disable();
  photoApiService
    .fetchArticles()
    .then(hits => {
      appendMarkup(hits);
      loadMoreBtn.enable();
      loadMoreBtn.show();
      if (photoApiService.totalPages <=1) {
        loadMoreBtn.hide();
        return;
      }
      if (photoApiService.page > photoApiService.totalPages) {
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
      loadMoreBtn.hide();
      return
    }
    })
    .catch(e => {
      Notiflix.Notify.failure('Oops, error!!!');
      loadMoreBtn.hide();
    })
}

function appendMarkup(hits) {
  galleryContainer.insertAdjacentHTML('beforeend', photoCard(hits));
}

function clearGalleryContainer() {
  galleryContainer.innerHTML = ``;
}

function typeSomething() {
     Notiflix.Notify.info(`Please type something`);
}