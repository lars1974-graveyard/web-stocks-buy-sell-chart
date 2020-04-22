import { html } from '../lib/lit-html.js';
import AbstractElement from './AbstractElement.js';

export default class CounterDisplay extends AbstractElement {
    view() {
        return html`
        <H1>${this.state.settings.count}</h1>
        `;
    }
}

customElements.define("counter-display", CounterDisplay);
