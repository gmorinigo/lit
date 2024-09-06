import { LitElement, html, css } from 'lit';
import {Router} from '@vaadin/router';

export class RouterApp extends LitElement {
  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('outlet'));

    router.setRoutes([
      {path: '/lit', component: 'login-page' },
      {path: '/lit/login', component: 'login-page' },
      {path: '/lit/home', component: 'home-page'}
    ]);
  }

  render() {
    return html`<div id='outlet'></div>`;
  }
}
customElements.define('router-app', RouterApp);
