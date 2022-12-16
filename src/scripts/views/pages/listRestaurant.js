/* eslint-disable linebreak-style */

import TheRestaurantDbSource from '../../data/therestaurantdb-source';

const ListRestaurant = {
  async render() {
    return `
    <main-banner src="./images/hero-image_4" ext='jpg'></main-banner>
    <restaurant-list>
      <!-- restaurant content here -->
    </restaurant-list>
    `;
  },

  async afterRender() {
    const listOfRestaurants = await TheRestaurantDbSource.getListOfRestaurants();
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurants = listOfRestaurants;
  },
};

export default ListRestaurant;
