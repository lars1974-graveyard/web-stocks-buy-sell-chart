import { html } from 'lit-element';
import AbstractElement from './AbstractElement.js';

export default class CounterDisplay extends AbstractElement {
    render() {
        return html`
        <H1>${this.state.settings.count}</h1>
        `;
    }
}

customElements.define("counter-display", CounterDisplay);
