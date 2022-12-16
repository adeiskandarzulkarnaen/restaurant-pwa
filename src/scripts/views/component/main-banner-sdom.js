/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

class MainBanner extends HTMLElement {
  constructor() {
    super();
    this.shadowBanner = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.src = this.getAttribute('src');
    this.ext = this.getAttribute('ext');
    this.render();
  }

  render() {
    this.shadowBanner.innerHTML = `
      <style>
        :host {
          width : 100% ;
        }
        .caption-container {
          padding: 9rem 0;
          background-repeat: no-repeat;
          background-size: 100%;
          min-height: 38vw;
          min-width: 310px;
        }
        .caption {
          color: white;
          background-color: #242529ea;
          margin: 5vw 0 0 3vw;
          max-width: 535px;
          padding: 1.5rem;
          border-radius: 15px;
        }
        .caption-header {
          font-size: 1.9em;
          margin: 0;
          margin-bottom: 0.2rem;
          font-weight: bold;
        }
        @media (max-width: 1000px) {
          .caption-container {
            padding: 1.5rem 0;
            min-height: 58vw;
          }
          .caption {
            margin: 15vw 3vw 0 3vw;
          }
        }
        @media (max-width: 800px) {
          .caption-header {
            font-size: 1.5em;
          }
          .caption-content{
            font-size : 0.9rem;
          }
        }
        @media (max-width: 620px) {
          .caption-container {
            min-height: 0 !important;
            min-width: 310px;
            background-size: cover;
            background-position: top center;
          }
          .caption {
            margin: 3vw;
          }
        }
        @media (max-width: 499px) {
          .caption-container {
            background-image: url('${this.src}-small.${this.ext}') !important;
          }
        }        
        @media (max-width: 899px) {
          .caption-container {
            background-image: url('${this.src}-large.${this.ext}');
          }
        }
        @media (min-width: 900px) {
          .caption-container {
            background-image: url('${this.src}.${this.ext}');
          }
        }
      </style>
      <div class="caption-container">
        <div class="caption" tabindex="0">
          <div class="caption-header">True Ingredients</div>
          <div class="caption-header">True Flavors</div>
          <div class="caption-header">True Passion</div>
          <p class="caption-content">
            There are many kinds of food. Of course, each place has its own specialties, 
            which may not be found anywhere else.
          </p>
        </div>
      </div>
    `;
  }

  attributesChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ['src'];
  }
}

customElements.define('main-banner', MainBanner);
