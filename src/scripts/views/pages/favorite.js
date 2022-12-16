/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
      <restaurant-list>
        <!-- restaurant content here -->
      </restaurant-list>
    `;
  },

  async afterRender() {
    const listOfRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantListElement = document.querySelector('restaurant-list');

    restaurantListElement.restaurants = listOfRestaurants;
    const contentHeader = document.querySelector('#content-header');

    if (listOfRestaurants.length === 0) {
      contentHeader.innerHTML = 'Belum ada Restaurant Favorite :(';
    } else {
      contentHeader.innerHTML = 'Restoran Favorit';
    }
  },
};

export default Favorite;
