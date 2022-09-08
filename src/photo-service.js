export default class PhotoApiService {
    constructor() {
        this.searchQuery = ``;
        this.page = 1;
  }
  fetchArticles() {
    const API_KEY = '29802518-7a19817c952422887bb4d93d8';
    const URL =
      'https://pixabay.com/api/?key=' +
      API_KEY +
      '&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}';
    fetch(URL)
      .then(r => r.json())
        .then(data => {
            this.incrementPage();
            console.log(this)
      });
    }

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
};