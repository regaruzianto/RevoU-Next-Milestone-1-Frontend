import axios from 'axios';

const apiUrl = 'https://like-deena-team1revounext-24ba131b.koyeb.app/api/products';

export const fetchReviews = {
  all: (productId) => 
    axios.get(`${apiUrl}/${productId}`)
      .then(res => res.data?.data?.reviews || [])
      .catch(() => []),

  newest: (productId) => 
    axios.get(`${apiUrl}/${productId}/sorted`)
      .then(res => res.data?.data?.reviews || [])
      .catch(() => []),

  byRating: (productId, rating) => 
    axios.get(`${apiUrl}/${productId}/${rating}`)
      .then(res => res.data?.data?.reviews || [])
      .catch(() => []),

  withPictures: (productId) => 
    axios.get(`${apiUrl}/${productId}/picture`)
      .then(res => res.data?.data?.reviews || [])
      .catch(() => [])
};

// import axios from 'axios';

// const apiUrl = 'https://like-deena-team1revounext-24ba131b.koyeb.app/api/products';

// export const fetchReviews = {
//   all: (productId) => axios.get(`${apiUrl}/${productId}`).then(res => res.data.reviews),
//   newest: (productId) => axios.get(`${apiUrl}/${productId}/sorted`).then(res => res.data.reviews),
//   byRating: (productId, rating) => axios.get(`${apiUrl}/${productId}/${rating}`).then(res => res.data.reviews),
//   withPictures: (productId) => axios.get(`${apiUrl}/${productId}/picture`).then(res => res.data.reviews)
// };