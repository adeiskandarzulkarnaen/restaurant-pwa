/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-duplicates */

import ListRestaurant from '../views/pages/listRestaurant';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': ListRestaurant, // default page
  '/list-restaurant': ListRestaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
