import { html } from 'lit-element';
import AbstractElement from './AbstractElement.js';
import { fetchValuta } from '../restclient.js'

export default class CounterControl extends AbstractElement {
    render() {
        return html`
        <style>
        button  {
          border-radius: 5px;
          padding: 5;
          background-color: blueviolet;
          color: white;
        }
        </style>
        <h1>Hmmm</h1>
        <button @click=${this.onCount.bind(this)}>count</button>
        <button @click=${this.onReset.bind(this)}>reset</button>
        `;
    }

    onCount() {
      this.dispatch({ type: 'ON_COUNT' });
      fetchValuta();
    }

    onReset() {
      this.dispatch({ type: 'ON_RESET' });
    }
}

customElements.define("counter-control", CounterControl);
