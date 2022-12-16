/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import UrlParser from '../../routes/url-parser';
import API_ENDPOINT from '../../globals/api-endpoint';
import PostReview from '../../utils/post-reviews';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        #menu-detail {
          margin-bottom: 38px;
        }
        .menu__main__info {
          background-color: white;
          margin: 0 auto;
          width: 100%;
          min-width: 310px;
          max-width: 800px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 9px;
          box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
          border-radius: 5px;
        }
        .menu__title {
          color: #da6b2d;
        }
        .menu__title,
        .menu__poster {
          padding: 16px;
        }
        .menu__description {
          padding: 12px;
        }
        .menu__poster {
          width: 100%;
          padding: 16px;
        }
        .menu__poster img {
          width: 100%;
          border-radius: 12px;
          border: 1px solid black;
        }
        .menu__info {
          min-width: 310px;
          padding: 12px;
        }
        .menu__info h4 {
          margin: 8px 0;
        }
        .reviews__container {
          align-items: flex-start;
          min-width: 310px;
          display: grid;
          grid-row-gap: 5px;
        }
        .other_users_reviews {
          margin: 0 auto;
          width: 100%;
          white-space: nowrap;
          overflow: auto;
          vertical-align: center;
        }
        .review {
          background-color: white;
          border-radius: 5px;
          display: inline-block;
          overflow-y: auto;
          padding: 16px;
          margin: 5px;
          border: 1px solid silver;
          box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
          white-space: normal;
        }
        .date__review {
          color: silver;
          font-size: 10px;
        }
        .review__content {
          font-style: italic;
        }
        .review__content::before,
        .review__content::after {
          content: '"';
        }
        .form__review {
          display: inline-block;
        }
        input {
          line-height: 21px;
          width: 100%;
          padding: 10px;
          margin-bottom: 5px;
        }
        #submit_review {
          display: block;
          font-size: 17px;
          padding: 12px;
          background-color: #c67c38;
          color: white;
          border-radius: 5px;
        }
        @media screen and (max-width: 499px) {
          .menu__info {
            padding-left: 16px;
          }        
          .other_users_review {
            margin-top: 5px;
          }        
          .review {
            height: 100px;
          }
        }        
        @media screen and (min-width: 500px) {
          .other_users_review {
            margin-top: 5px;
          }        
          .review {
            height: 150px;
          }
        }        
        @media screen and (min-width: 650px) {
          .menu__main__info {
            grid-template-columns: auto 1fr;
          }        
          .menu__main__info .menu__title {
            grid-column-start: 1;
            grid-column-end: 3;
          }
          .menu__main__info .menu__description {
            grid-column-start: 1;
            grid-column-end: 3;
          }
        }        
        @media screen and (min-width: 900px) {
          #menu-detail {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-column-gap: 10px;
          }        
          .other_users_reviews {
            height: 550px;
          }        
          .review {
            display: block;
            height: auto;
          }
        }
      </style>

      <div id="menu-detail" class="menu-detail">
        <div class="menu__main__info" tabindex="0">
          <h2 class="menu__title">${this._restaurant.name}</h2>
          <div class="menu__poster">
            <img data-src="${API_ENDPOINT.RESTAURANT_PICTURE_SMALL(this._restaurant.pictureId)}" class="lazyload" alt="${this._restaurant.name}" >
          </div>
          <div class="menu__info">
            <h3>Detail Restaurant</h3>
            <h4>Alamat Lengkap</h4>
            <p>${this._restaurant.address}, ${this._restaurant.city}</p>
            <h4>Kategori Menu</h4>
            <p>${this._restaurant.categories.map((category) => ` ${category.name}`)}</p>
            <h4>Menu Makanan</h4>
            <p>${this._restaurant.menus.foods.map((food) => ` ${food.name}`)}</p>
            <h4>Menu Minuman</h4>
            <p>${this._restaurant.menus.drinks.map((drink) => ` ${drink.name}`)}</p>
            <h4>Rating</h4>
            <p>${this._restaurant.rating}</p>
          </div>
          <div class="menu__description">
            <h3>Deskripsi</h3>
            <p>${this._restaurant.description}</p>
          </div>
        </div>
        <div class="reviews__container" tabindex="0">
          <div class="other_users_reviews">
            ${this._restaurant.customerReviews.map((review) => `
              <div class="review">
                <h4>${review.name}</h4>
                <p class="date__review">${review.date}</p>
                <p class="review__content">${review.review}</p>
              </div>`).join('')}
          </div>
          <div class="form__review">
            <form>
              <input name="reviewers_name" type="text" id="reviewers_name" placeholder="Name">
              <input name="input_review" type="text" id="input_review" placeholder="Review . . .">
              <button id="submit_review" type="submit">Kirim</button>
            </form>
          </div>
        </div>
      </div>
    `;

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const submitReviewButton = document.querySelector('#submit_review');
    const reviewersName = document.querySelector('#reviewers_name');
    const inputReview = document.querySelector('#input_review');

    submitReviewButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (reviewersName.value === '' || inputReview.value === '') {
        // eslint-disable-next-line no-alert
        alert('Harap isi nama dan juga detail review');
        reviewersName.value = '';
        inputReview.value = '';
      } else {
        PostReview(url.id, reviewersName.value, inputReview.value);
        reviewersName.value = '';
        inputReview.value = '';
      }
    });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
