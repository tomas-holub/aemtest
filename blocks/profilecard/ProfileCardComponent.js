class ProfileCardComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = '<h1>I am Product Card</h1>';
  }
}

customElements.define('profile-card', ProfileCardComponent);
