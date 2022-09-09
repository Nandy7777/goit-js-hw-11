export default class PhotoApiService {
    constructor() {
        this.searchQuery = ``;
        this.page = 1;
    }

    fetchArticles() {
        const URL = `https://pixabay.com/api/videos/?key=29802518-7a19817c952422887bb4d93d8&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;
        
    return fetch(URL)
      .then(r => r.json())
        .then(data => {
            this.incrementPage();
            return data.hits;
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