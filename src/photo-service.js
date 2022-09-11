import axios from 'axios';

export default class PhotoApiService {
  constructor() {
    this.searchQuery = ``;
    this.page = 1;
  }
  async fetchArticles() {
    const response = await axios.get(
      `https://pixabay.com/api/?key=29802518-7a19817c952422887bb4d93d8&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`
    );
    this.incrementPage();
    return response.data;
  }

  // fetchArticles() {
  //     const URL = `https://pixabay.com/api/?key=29802518-7a19817c952422887bb4d93d8&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=4&page=${this.page}`;

  // return fetch(URL)
  //   .then(response => response.json())
  //     .then( ({hits}) => {
  //         this.incrementPage();
  //         return hits;
  //   });
  // }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
