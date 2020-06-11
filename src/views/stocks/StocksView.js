import { html } from 'lit-element';
import AbstractElement from '../AbstractElement.js';
import '@vaadin/vaadin-button/vaadin-button';
import '@vaadin/vaadin-combo-box/vaadin-combo-box';
import '@vaadin/vaadin-menu-bar/vaadin-menu-bar';
import { parse } from './transactionsParser.js';
import { stockTransactions, listStocksNames } from './transactionQueries.js';
import { fetchStockHistory } from './pricesQueries.js';
import { store } from '../../state.js'

export default class StocksView extends AbstractElement {
    render() {
        var stockNames = listStocksNames();

        return html`
        <vaadin-button theme="primary" @click="${this.updated.bind(this)}">Load</vaadin-button>
        <input id="image-file" type="file" @change="${this.savePhoto.bind(this)}" >
        <vaadin-combo-box label="Stocks" @change="${this.stockSelect.bind(this)}" .items="${stockNames}" item-value-path="isin" item-label-path="stock" ></vaadin-combo-box>
        
        <h1>vaadin</h1>
        `;
    }

/*

<script>
  customElements.whenDefined('vaadin-combo-box').then(function() {
    const departments = [
      {id: '1', name: 'Product'},
      {id: '2', name: 'Service'},
      {id: '3', name: 'HR'},
      {id: '4', name: 'Accounting'}
    ];
    const comboBox = document.querySelectorAll('vaadin-combo-box');
    comboBox.forEach(function(combo) {
      combo.items = departments;
      combo.itemValuePath = 'id';
      combo.itemLabelPath = 'name';
      combo.value = '1';
    });
  });
</script>



<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
*/

    updated(event){
        console.log("updated");
        console.log(listStocksNames());
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

    stockSelect(event) {
        console.log("stockSelect");
        console.dir(event.target.value);
        var stockTx = stockTransactions(event.target.value);
        console.dir(stockTx);
    }

}

customElements.define("stocks-view", StocksView);