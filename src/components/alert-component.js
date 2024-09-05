import { LitElement, html, css } from 'lit';

export class AlertComponent extends LitElement {
  static properties = {
    visibility: {type: String, reflect: true},
    type: {type: String, reflect: true},
    message: {type: String, reflect: true}
  }
  constructor () {
    super();
    this.visibility = 'hidden';
  }

  changeStatus() {
    this.visibility = this.visibility === 'hidden' ? 'visible' : 'hidden';
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
      }
    `
  ];

  render() {
    return html`
      <style>
        #alertMessageContainer {	
          visibility: ${this.visibility};
        }
        div {
          display: flex;
          flex-direction: column;
        }
      </style>
      <div id='alertMessageContainer'>
        <h1 id='alertMessageTitle'>Alert Message</h1>
        <div>
          <label id='type'>${this.type}</label> 
          <label id='message'>${this.message}</label>
        </div>
      </div>
    `;
  }
}
customElements.define('alert-component', AlertComponent);
