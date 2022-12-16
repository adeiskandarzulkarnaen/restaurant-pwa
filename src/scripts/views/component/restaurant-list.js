/* eslint-disable max-classes-per-file */

import API_ENDPOINT from '../../globals/api-endpoint';

class RestaurantItem extends HTMLElement {
  set addRestaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="restaurant-card">
        <div class="restaurant-image">
          <img data-src="${API_ENDPOINT.RESTAURANT_PICTURE_SMALL(this._restaurant.pictureId)}" class="restaurant-image lazyload" alt="${this._restaurant.name}">
        </div>
        <div class="restaurant" tabindex="0">
          <p class="rating">Rating: ${this._restaurant.rating}</p>
          <h2 class="restaurant-name"><a href="/#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h2>
          <p class="description">${this._restaurant.description}</p>
          <p class="city">Kota. ${this._restaurant.city}</p>
        </div>
      </div>
  `;
  }
}

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        :host {
          width: 100%;
          margin: 0 auto;
          background-color: var(--primary-color);
        }
        .main-content {
          padding: 3rem;
        }
        #content-header {
          min-width: 278px;
          font-size: 32px;
          text-align: center;
          color: white;
          font-weight: bold;
          margin-bottom: 45px;
        }
        .content-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin: 0 auto;
        }  
        .restaurant-card {
          position: relative;
          background-color: white;
          min-width: 278px;
          width: 100%;
          height: 100%; /* height-card */
          border-radius: 12px;
          overflow: hidden;
        }
        .restaurant {
          text-align: justify;
          /* padding in card  */
          padding: 17px;
        }
        .restaurant-image {
          width: 100%;
          height: 200px;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }  
        .restaurant-name {
          font-size: 19px;
          font-weight: bold;
        } 
        .restaurant-name a {
          text-decoration: none;
          color: #da6b2d;
          padding: 10px 0;
        }
        .restaurant-name a:hover {
          color: #212429;
        }
        .rating {
          font-weight: bolder;
          font-size: 12px;
          margin: 0;
        }
        .description {
          font-size: 0.95em;
          font-weight: 300;
          line-height: 1.5em;
          margin: 0 auto;
        }
        .city {
          position: absolute;
          top: 9px;
          left: 5px;
          padding: 7px 10px;
          background-color: white;
          color: black;
          border-radius: 5px;
          box-shadow: 2px 1px #888888;
        }
        @media screen and (max-width: 1000px) {
          .main-content {
            padding: 1rem 2.5rem;
          }
          .content-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media screen and (max-width: 700px) {
          .main-content {
            padding: 1rem 2rem;
          }
          #content-header {
            font-size: 25px;
          }
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
        @media screen and (max-width: 500px) {
          .main-content {
            padding: 1rem;
          }
          .description {
            font-size: 0.85em;
          }
        }
      </style>
      <div class="main-content">
        <div id="content-header" tabindex="0">
          Explore Restaurant
        </div>
        <div class="content-grid">
          <!--Daftar restaurant ditampilkan disini-->
        </div>
      </div>
    `;
    const contentGrid = this.querySelector('.content-grid');
    this._restaurants.forEach((restaurant) => {
      const restaurantElement = document.createElement('restaurant-item');
      restaurantElement.addRestaurant = restaurant;
      contentGrid.appendChild(restaurantElement);
    });
  }
}

customElements.define('restaurant-item', RestaurantItem);
customElements.define('restaurant-list', RestaurantList);
