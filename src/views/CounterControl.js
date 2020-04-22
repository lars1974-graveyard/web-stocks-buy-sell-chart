import { html } from '../lib/lit-html.js';
import AbstractElement from './AbstractElement.js';
import { store } from '../state.js'

export default class CounterControl extends AbstractElement {
    view() {
        return html`
        <link rel="stylesheet" type="text/css" href="../css/counter-control.css" />
        <button @click=${this.onCount.bind(this)}>count</button>
        <button @click=${this.onReset.bind(this)}>reset</button>
        `;
    }

    onCount() {
      store.dispatch({ type: 'ON_COUNT' });
    }

    onReset() {
      store.dispatch({ type: 'ON_RESET' });
    }
}

customElements.define("counter-control", CounterControl);
