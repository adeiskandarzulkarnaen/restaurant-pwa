/* eslint-disable linebreak-style */

import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css'; /* CSS Styling */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './views/component/navigation-bar-sdom';
import './views/component/main-banner-sdom';
import './views/component/restaurant-list';
import './views/component/restaurant-detail';
import './views/component/footer-credits-sdom';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
