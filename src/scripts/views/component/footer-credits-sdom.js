class FooterCredits extends HTMLElement {
  constructor() {
    super();
    this._shadowCredits = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowCredits.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          min-width: 310px;
          color: white;  /* inherit */
        }
        .credits {
          font-size: 0.95em;
          padding: 9px 0;
          text-align: center;
          background: #212429;
          /* border : 1px solid orange; */
          border-top: 1px solid orange;
          border-bottom: 1px solid orange;
        }
        .credits > p > a {
          text-decoration: none;
          padding : 12px 0;
          color: orange;
        }
        .credits > p > a:hover {
          color: white;
        }
      </style>
      <div class="credits" >
        <p>
          Tuangeun Apps 
          | created by <a href="https://www.instagram.com/adeiskandarzulkarnaen/">adeiskandarzulkarnaen</a> 
          | copyright &copy; 2022
        </p>
      </div>
    `;
  }
}

customElements.define('footer-credits', FooterCredits);
