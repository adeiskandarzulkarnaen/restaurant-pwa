/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async getListOfRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_OF_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailOfRestaurant(restaurantId) {
    const response = await fetch(API_ENDPOINT.DETAIL_OF_RESTAURANT(restaurantId));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postRestaurant(data) {
    const rawResponse = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return rawResponse;
  }
}

export default TheRestaurantDbSource;
