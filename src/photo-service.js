import { Notify } from 'notiflix/build/notiflix-notify-aio';
const axios = require('axios');
import LoadMoreBtn from './load-more-btn';

const loadMoreBtn = new LoadMoreBtn({
  selector: '.load-more',
  hidden: true,
});

export default class PhotoApiService {
  constructor() {
    this.searchQuery = ``;
    this.page = 1;
    this.totalPages = null;
  }

  async fetchArticles() {
    const response = await axios.get(
      `https://pixabay.com/api/?key=29802518-7a19817c952422887bb4d93d8&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`
    );
    const data = await response.data;
    const photos = await this.getArrayOfPhotos(data);
    return photos;
  }

  getArrayOfPhotos(r) {
    this.totalPages = Math.ceil(r.totalHits / 40);
    if (r.totalHits === 0) {
      loadMoreBtn.hide();
      return Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    if (this.page === 1) {
      Notify.success(`Hooray! We found ${r.totalHits} images.`);
    }
    if (r.totalHits > r.hits) {
      Notify.info("We're sorry, but you've reached the end of search results.");
      loadMoreBtn.hide();
      return
    }
    this.page += 1;
    return r.hits;
  }

  resetPage() {
    this.page = 1;
    this.totalPages = null;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
