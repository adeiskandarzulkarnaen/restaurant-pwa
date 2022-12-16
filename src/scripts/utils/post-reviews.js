/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import TheRestaurantDbSource from '../data/therestaurantdb-source';

const PostReview = (id, name, review) => {
  const dataFromInput = {
    id,
    name,
    review,
  };

  TheRestaurantDbSource.postRestaurant(dataFromInput);

  const reviewContainer = document.querySelector('.other_users_reviews');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
    <div class="review">
      <h4>${name}</h4>
      <p class="date__review">${date}</p>
      <p class="review__content">${review}<p>
    </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default PostReview;
