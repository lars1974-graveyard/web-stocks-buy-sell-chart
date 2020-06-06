import { html } from 'lit-element';
import AbstractElement from '../AbstractElement.js';
import '@vaadin/vaadin-button/vaadin-button';
import '@vaadin/vaadin-menu-bar/vaadin-menu-bar';

export default class Vaadin extends AbstractElement {
    render() {
        const bar = document.createElement('vaadin-menu-bar');
        var items = [
            {
                text: 'Project',
                children: [
                    {
                        text: 'Users',
                        children: [{ text: 'List' }, { text: 'Add' }]
                    },
                    {
                        text: 'Billing',
                        children: [{ text: 'Invoices' }, { text: 'Balance Events' }]
                    },
                ]
            },
            {
                text: 'Account',
                children: [
                    { text: 'Edit Profile' },
                    { text: 'Privacy Settings' }
                ]
            },
            { text: 'Sign Out' }
        ];
    

        return html`
        
        <h1>vaadin</h1>
        <vaadin-button theme="primary" @click="${this.updated.bind(this)}">Primary</vaadin-button>
        <vaadin-menu-bar theme="tertiary dark" .items="${items}" style="height: 100px;"></vaadin-menu-bar>
        `;
    }


}

customElements.define("vaadin-page", Vaadin);