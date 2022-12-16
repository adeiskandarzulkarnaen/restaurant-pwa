/* eslint-disable import/prefer-default-export */

import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

export const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};
