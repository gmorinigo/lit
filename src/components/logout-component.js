import { LitElement, html, css } from 'lit';

class LogoutComponent extends LitElement {
  constructor() {
    super();
    this.email = '';
    this.password = '';
  }

  static get properties() {
    return {
      email: { type: String },
      password: { type: String },
    };
  }

  static styles = css`
    :host {
      display: block;
      max-width: 400px;
      margin: 0 auto;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-family: Arial, sans-serif;
    }

    input[type="email"],
    input[type="password"] {
      width: 95%;
      padding: 8px;
      margin-bottom: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 4px;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  `;

  handleInputChange(e) {
    const { name, value } = e.target;
    this[name] = value;
  }

  dispatchCustomEvent(eventName, detail) {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  _handleSubmit(e) {   
    e.preventDefault();
    this.dispatchCustomEvent('logout-component:logout', {});
  }

  render() {
    return html`
      <button @click=${this._handleSubmit}>Logout</button>
    `;
  }
}

customElements.define('logout-component', LogoutComponent);