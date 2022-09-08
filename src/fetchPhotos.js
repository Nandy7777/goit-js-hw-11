// export const fetchPhotos = name => {
//     const API_KEY = '29802518-7a19817c952422887bb4d93d8';
//     const URL =
//       'https://pixabay.com/api/?key=' +
//       API_KEY +
//       '&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&largeImageURL';
 
//   return fetch(URL)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
