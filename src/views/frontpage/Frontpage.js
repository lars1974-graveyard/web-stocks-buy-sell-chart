import { html } from 'lit-element';
import AbstractElement from '../AbstractElement.js';
import '@google-web-components/google-signin';

export default class Frontpage extends AbstractElement {
    render() {
        return html`
            <h1>FrontPage</h1>
            <a href="/currency-exchange">Currency Exchange</a><br>
            <a href="/vaadin">Vaadin</a><br>
            <a href="/polyelements">Polymer Element</a><br>
            <google-signin client-id="227028281354-s8mdjp610ufcasnsde89h3ebjqlqrfe9.apps.googleusercontent.com"></google-signin>
        `;
    }
}

customElements.define("front-page", Frontpage);
