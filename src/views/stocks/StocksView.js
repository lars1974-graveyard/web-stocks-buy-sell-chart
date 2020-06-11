import { html } from 'lit-element';
import AbstractElement from '../AbstractElement.js';
import '@vaadin/vaadin-button/vaadin-button';
import '@vaadin/vaadin-menu-bar/vaadin-menu-bar';
import { parse } from './transactionsParser.js';
import { stockTransactions, listStocksNames } from './transactionQueries.js';
import { fetchStockHistory } from './pricesQueries.js';
import { store } from '../../state.js'

export default class StocksView extends AbstractElement {
    render() {
        return html`

        <vaadin-button theme="primary" @click="${this.updated.bind(this)}">Primary</vaadin-button>
        <input id="image-file" type="file" @change=${this.savePhoto.bind(this)}" >
        <h1>vaadin</h1>
        `;
    }

    updated(event){
        console.log("updated");
        console.log(fetchStockHistory("DK0010274414"));
    }

    savePhoto(event) {

        console.log("savephot")
        var file = this.shadowRoot.querySelector('#image-file').files[0];
             
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
          store.dispatch({ type: 'TRANSACTIONS_UPLOADED', transactions: parse(event.target.result) });

          //listStocksNames()
          console.log(stockTransactions("DK0010274414"));
        });
        reader.readAsText(file);
    }


}

customElements.define("stocks-view", StocksView);