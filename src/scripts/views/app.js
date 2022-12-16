/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElement = document.querySelector('.skip-to-content');
    skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#skip-to-content').focus();
    });
  }
}

export default App;
