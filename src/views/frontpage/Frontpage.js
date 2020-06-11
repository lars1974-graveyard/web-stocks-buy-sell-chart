import { html } from 'lit-element';
import AbstractElement from '../AbstractElement.js';
import '@google-web-components/google-signin';

export default class Frontpage extends AbstractElement {
    render() {
        var aware = document.createElement("google-signin-aware");
        aware.addEventListener("google-signin-aware-success", function(response) {
            console.log("SIGNIN")
            this.status = 'Signin granted';
            console.log('[Aware] Signin Response', response);
            this.userName = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName();
            alert("Hello " + this.userName);
          });
        aware.setAttribute("scopes","https://www.googleapis.com/auth/calendar");

        return html`
            <h1>FrontPage</h1>
            <a href="/currency-exchange">Currency Exchange</a><br>
            <a href="/vaadin">Vaadin</a><br>
            <a href="/polyelements">Polymer Element</a><br>
            <a href="/stocks">Stocks</a><br>
            <google-signin client-id="227028281354-s8mdjp610ufcasnsde89h3ebjqlqrfe9.apps.googleusercontent.com"></google-signin>
            <div id="sa">${aware}</div>
            `;
    }

  
}

customElements.define("front-page", Frontpage);
