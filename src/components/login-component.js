import { LitElement, html, css } from 'lit';

class LoginComponent extends LitElement {
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

  handleSubmit(e) {   
    e.preventDefault();

    if (this.email === 'asd@gmail.com' && this.password === '123') {
      this.dispatchCustomEvent('login-component:login-success', {
        email: this.email,
        password: this.password
      });
    }
    else {
      this.dispatchCustomEvent('login-component:login-error', {
        type: 'Error',
        message: 'Usuario o password incorrecta'
      });
    }
  }

  render() {
    return html`
      <form @submit="${this.handleSubmit}">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          .value="${this.email}"
          @input="${this.handleInputChange}"
          required
        />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          .value="${this.password}"
          @input="${this.handleInputChange}"
          required
        />
        <button type="submit">Login</button>
      </form>
    `;
  }
}

customElements.define('login-component', LoginComponent);