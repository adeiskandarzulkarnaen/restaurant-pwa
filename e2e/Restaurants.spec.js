/* eslint-disable no-undef */

const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = 'Belum ada Restaurant Favorite :(';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#content-header');
  I.see(firstCondition, '#content-header');
});

Scenario('Adding one restaurant to Favorites', async ({ I }) => {
  I.see(firstCondition, '#content-header');

  I.amOnPage('/');
  I.waitForElement('.restaurant-card', 9);

  const firstCard = locate('.restaurant-name a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.waitForElement('#likeButton', 9);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-card');
  const likedCardTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('Removing one restaurant from Favorites', async ({ I }) => {
  I.see(firstCondition, '#content-header');

  I.amOnPage('/');

  // melihat card restaurant pertama dan mengkliknya
  I.waitForElement('.restaurant-card', 9);
  const firstCard = locate('.restaurant-name a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  // menambahkan restoran ke Favorit
  I.waitForElement('#likeButton', 9);
  I.click('#likeButton');

  // kembali ke halaman favorit dan membandingkan dgn restoran yg diklik
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-card');
  const likedCardTitle = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  // mengklik restoran yang ada di favorit
  I.click(likedCardTitle);

  // mengunlike restaurant yang ada di favorit
  I.waitForElement('#likeButton', 9);
  I.click('#likeButton');

  // kembali ke halaman favorit
  I.amOnPage('/#/favorite');
  I.seeElement('#content-header');
  const noFavoriteRestaurant = await I.grabTextFrom('#content-header');

  // Memastikan pada Halaman favorit bahwa restoran yang sudah di unlike tidak ditampilkan
  assert.strictEqual(noFavoriteRestaurant, firstCondition);
});

Scenario('Adding customer review', async ({ I }) => {
  I.see(firstCondition, '#content-header');

  I.amOnPage('/');

  I.waitForElement('.restaurant-card', 9);
  I.click(locate('.restaurant-name a').first());

  I.waitForElement('.form__review form', 9);

  const textReview = 'Tempat terbaik buat ngumpul!!';
  I.fillField('reviewers_name', 'Ade Iskandar Zulkarnaen');
  I.fillField('input_review', textReview);

  I.click('#submit_review');

  const lastReview = locate('.review__content').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});
