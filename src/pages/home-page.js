import { LitElement, html, css } from 'lit';
import "/src/components/logout-component.js"
import '@dile/ui/components/nav/nav.js';
import { Router } from '@vaadin/router';

export class HomePage extends LitElement {
  static styles = [
    css`
      :host {
        display: grid;
        width: 96vw;
        height: 100px;
        padding-left: 1vw;
        --dile-nav-align-items: center;
      }
      dile-nav h2 {
        text-align: center;
      }
    `
  ];

  _handleLogout(){
    sessionStorage.removeItem("userLogged");
    Router.go("/login");
  }

  render() {
    return html`<!--h1> Home Page </h1-->
    <dile-nav>
      <h2 slot="title">Home Page</h2>
      <span slot="actions">
        <logout-component @logout-component:logout=${this._handleLogout}></logout-component>
      </span>
    </dile-nav>`;
  }
}
customElements.define('home-page', HomePage);
