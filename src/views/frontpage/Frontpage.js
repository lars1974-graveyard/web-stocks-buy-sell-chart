import { html } from 'lit-element';
import AbstractElement from '../AbstractElement.js';

export default class Frontpage extends AbstractElement {
    render() {
        return html`
            <h1>FrontPage</h1>
            <a href="/currency-exchange">Currency Exchange</a><br>
            <a href="/vaadin">Vaadin</a><br>
            <a href="/polyelements">Polymer Element</a><br>
        `;
    }
}

customElements.define("front-page", Frontpage);
