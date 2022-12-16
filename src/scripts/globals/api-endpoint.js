/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import CONFIG from './config';

const API_ENDPOINT = {
  LIST_OF_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  DETAIL_OF_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH_RESTAURANT: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  POST_REVIEW: `${CONFIG.BASE_URL}/review`,

  RESTAURANT_PICTURE_SMALL: (pictureId) => `${CONFIG.BASE_URL}/images/small/${pictureId}`,
  RESTAURANT_PICTURE_MEDIUM: (pictureId) => `${CONFIG.BASE_URL}/images/medium/${pictureId}`,
  RESTAURANT_PICTURE_LARGE: (pictureId) => `${CONFIG.BASE_URL}/images/large/${pictureId}`,
};

export default API_ENDPOINT;
