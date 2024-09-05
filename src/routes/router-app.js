import { LitElement, html, css } from 'lit';
import {Router} from '@vaadin/router';

export class RouterApp extends LitElement {
  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('outlet'));

    router.setRoutes([
      {path: '/', component: 'login-page' },
      {path: '/login', component: 'login-page' },
      {path: '/home', component: 'home-page'}
    ]);
  }

  render() {
    return html`<div id='outlet'></div>`;
  }
}
customElements.define('router-app', RouterApp);
