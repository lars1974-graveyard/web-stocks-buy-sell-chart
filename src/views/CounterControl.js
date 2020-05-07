import { html } from '../lib/lit-element.js';
import AbstractElement from './AbstractElement.js';

export default class CounterControl extends AbstractElement {
    render() {
        return html`
        <link rel="stylesheet" type="text/css" href="../css/counter-control.css" />
        <h1>Hmmm</h1>
        <button @click=${this.onCount.bind(this)}>count</button>
        <button @click=${this.onReset.bind(this)}>reset</button>
        `;
    }

    onCount() {
      this.dispatch({ type: 'ON_COUNT' });
    }

    onReset() {
      this.dispatch({ type: 'ON_RESET' });
    }
}

customElements.define("counter-control", CounterControl);
