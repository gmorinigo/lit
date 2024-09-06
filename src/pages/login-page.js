import { LitElement, html, css } from 'lit';
import '/src/components/login-component.js';
import '/src/components/alert-component.js';
import { Router } from '@vaadin/router';

export class LoginPage extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `
  ];

  _handleLoginSuccess(){
    sessionStorage.setItem("userLogged", true);
    var userLogged = sessionStorage.getItem("userLogged");
    Router.go("/lit/home");
  }

  _handleLoginError (e){
    console.log(e);
    const {type, message} = e.detail;
    let alertComponent = this.shadowRoot.querySelector('alert-component');
    alertComponent.setAttribute("type", type);
    alertComponent.setAttribute("message", message);
    alertComponent.changeStatus();
  }

  render() {
    return html`
      <login-component 
      @login-component:login-success=${this._handleLoginSuccess}
      @login-component:login-error=${this._handleLoginError}
      ></login-component>
      <alert-component type message></alert-component>
    `;
  }
}
customElements.define('login-page', LoginPage);
