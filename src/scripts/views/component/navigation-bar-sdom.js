/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

class NavigationBar extends HTMLElement {
  constructor() {
    super();
    this._shadowNavBar = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowNavBar.innerHTML = `
      <style>
        * {
          margin: 0 ;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          font-family: inherit;
          width: 100%;
          color: white;  /* inherit */
        }
        .nav-container {
          color: white;
          display: flex;
          flex-wrap: wrap;
          min-width: 310px;
          align-items: center;
          justify-content: space-between;
          background-color: #212429;
          padding: 0rem 1.9rem;
        }
        .nav-container a {
          color: inherit;
          text-decoration: none;
          padding : 10px 0;
        }
        #logo {
          margin: 0.7em 0;
          font-size: 1.85rem;
        }
        #hamburg {
          display: none;
          padding : 0 9px;
          font-size: 32px;
        }
        #hamburg:hover {
          color: #c67c38;
          font-weight: bold;
        }
        .menu {
          display: flex;
          gap: 25px;
          list-style: none;
        }
        .menu > li:hover {
          color: #c67c38;
        }
        #hidden-navigation > .menu > li:hover {
          color: white !important;
        }
        #hidden-navigation {
          color: #212429;
          position: absolute;
          background-color: #c67c38;
          width: 250px;
          height: 101vh;
          z-index: 100;
          transform: translate(-260px, -70px);
          transition: transform 0.7s ease-in-out;
        }
        #hidden-navigation.open {
          transform: translate(0, -70px);
        }
        #hidden-navigation > .hidden-logo {
          font-size: 1.4em;
          font-weight: bolder;
          padding: 0.7em 0;
          padding-left: 1.2em;
        }
        #hidden-navigation > ul {
          background-color: #c67c38;
          display: flex !important;
          flex-direction: column !important;
          gap: 0.2em;
          padding: 0 !important;
        }
        #hidden-navigation > ul > li {
          padding: 0.5em 2rem;
        }
        #hidden-navigation a {
          padding : 12px 0 ;
          color: inherit;
          text-decoration: none;
        }
        @media screen and (max-width: 620px) {
          #logo {
            font-size: 1.5rem;
          }
        }
        @media screen and (max-width: 500px) {
          .nav-container {
            padding: 0rem 1rem 0 1.8rem;
          }
          .menu {
            display: none !important;
          }
          #hamburg {
            display: flex;
          }
        }
      </style>
      <div class="nav-container">
        <h1 id="logo" class="mainMenuIndex" tabindex="0">Tuangeun Apps</h1>
        <button id="hamburg">☰</button>
        <ul class="menu" >
          <li><a href="#/" class="mainMenuIndex" tabindex="0">Home</a></li>
          <li><a href="#/favorite" class="mainMenuIndex" tabindex="0">Favorite</a></li>
          <li><a href="https://www.instagram.com/adeiskandarzulkarnaen/" class="mainMenuIndex" tabindex="0">About Us</a></li>
        </ul>
      </div>
      <nav id="hidden-navigation">
        <div class="hidden-logo">Tuangeun Apps</div>
        <ul class="menu" >
          <li><a href="#/" class="hiddenMenuIndex" tabindex="-1">Home</a></li>
          <li><a href="#/favorite" class="hiddenMenuIndex" tabindex="-1">Favorite</a></li>
          <li><a href="https://www.instagram.com/adeiskandarzulkarnaen/" class="hiddenMenuIndex" tabindex="-1">About Us</a></li>
        </ul>
      </nav>
    `;
    this._shadowNavBar.querySelector('#hamburg').addEventListener('click', (event) => {
      if (this._shadowNavBar.querySelector('#hamburg').innerHTML === '☰') {
        this._shadowNavBar.querySelector('#hamburg').innerHTML = '✕';
        this._shadowNavBar.querySelectorAll('.hiddenMenuIndex').forEach((list) => {
          list.setAttribute('tabindex', '0');
        });
        this._shadowNavBar.querySelectorAll('.mainMenuIndex').forEach((list) => {
          list.setAttribute('tabindex', '-1');
        });
      } else {
        this._shadowNavBar.querySelector('#hamburg').innerHTML = '☰';
        this._shadowNavBar.querySelectorAll('.hiddenMenuIndex').forEach((list) => {
          list.setAttribute('tabindex', '-1');
        });
        this._shadowNavBar.querySelectorAll('.mainMenuIndex').forEach((list) => {
          list.setAttribute('tabindex', '0');
        });
      }
      this._shadowNavBar.querySelector('#hidden-navigation').classList.toggle('open');
      event.stopPropagation();
    });
  }
}

customElements.define('navigation-bar', NavigationBar);
