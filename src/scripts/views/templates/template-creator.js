/* eslint-disable linebreak-style */

const createLikeButtonTemplate = () => `
  <button aria-label="Add this restaurant to favorite" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="Remove this restaurant from favorite" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
