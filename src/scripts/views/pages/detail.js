/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <restaurant-detail>
        <!-- content --> 
      </restaurant-detail>
      <div id="likeButtonContainer">
        <!-- tombol like disini -->
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.getDetailOfRestaurant(url.id);

    const menuDetailContainer = document.querySelector('restaurant-detail');
    menuDetailContainer.restaurant = restaurant;

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant,
    });
  },
};

export default Detail;
