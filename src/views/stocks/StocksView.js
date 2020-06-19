import { html, css } from 'lit-element';
import AbstractElement from '../AbstractElement.js';
import '@vaadin/vaadin-button/vaadin-button';
import '@vaadin/vaadin-combo-box/vaadin-combo-box';
import '@vaadin/vaadin-menu-bar/vaadin-menu-bar';
import '@vaadin/vaadin-grid/vaadin-grid';
import { parse } from './transactionsParser.js';
import { stockTransactions, listStocksNames, formatTransactions, collapseTransactionsOnSameDay } from './transactionQueries.js';
import { fetchStockHistory } from './pricesQueries.js';
import { drawchart } from './chartData.js';
import { store } from '../../state.js'

export default class StocksView extends AbstractElement {
  constructor() {
    super();
    google.charts.load('current', { 'packages': ['corechart'] });
  }
  render() {
    this.stock = this.state.stocks.selectedStock;
    this.history = this.state.stocks.prices[this.stock]
    this.totalAmount = ""
    this.transactions = [];


    if (this.stock && this.history) {
      this.transactions = stockTransactions(this.stock).transactions;
      this.collapsedTransactions = collapseTransactionsOnSameDay(this.transactions);
      this.totalAmount = -stockTransactions(this.stock).totalAmount;
      setTimeout(drawchart.bind(this), 500, this.shadowRoot.getElementById("piechart"),this.stock, this.history.prices, this.collapsedTransactions);

    }

    return html`
        <meta name="viewport" content="width=device-width" />
        <div class="grid">
        <input id="image-file" grid-component type="file" @change="${this.addFile.bind(this)} style="grid-area: file;" >
       
        
        <vaadin-combo-box class="stock-selector grid-component" style="grid-area: stoc;" label="Stocks" @change="${this.stockSelect.bind(this)}" .items="${listStocksNames()}" item-value-path="isin" item-label-path="stock" ></vaadin-combo-box>
        <div id="piechart" style="grid-area: char;"></div>

        <vaadin-grid id="stockgrid" class="stockgrid grid-component" style="grid-area: tabl;" .items="${formatTransactions(this.transactions)}" >
        <vaadin-grid-column path="date" header="date"/></vaadin-grid-column>
        <vaadin-grid-column path="action" header="action"/></vaadin-grid-column>
        <vaadin-grid-column path="price" header="price" text-align="end"/></vaadin-grid-column>
        
        <vaadin-grid-column path="quantity" header="quantity" text-align="end"/></vaadin-grid-column>
        <vaadin-grid-column path="summedQuantity" header="Owned" text-align="end"/></vaadin-grid-column>
        <vaadin-grid-column path="amount" header="amount" text-align="end"/></vaadin-grid-column>
        <vaadin-grid-column path="saldo" header="saldo" text-align="end"/></vaadin-grid-column>
        </vaadin-grid>
        </div>
        `;
  }



  static get styles() {
    return [css` 

    :host {
      background-color: cyan;
    }
    .grid {    
        height: auto;
        width: 90%;
        margin: auto;
        display: grid;
        grid-gap: 2px;  
        grid-template-columns: 10fr 10fr;
        grid-template-rows: auto auto auto;
        grid-template-areas: "file stoc" "char char" "tabl tabl";
        
    }

    .stockgrid {
      width: 100%;
      
    }

    .stock-selector {
      width: 50%;
    }


    #piechart {
      width: 100%;
      height: 600px;
    }

    .grid-component {
        //background-color: red;
    }
    `];
  }

  

  addFile(event) {
    var file = this.shadowRoot.querySelector('#image-file').files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      store.dispatch({ type: 'TRANSACTIONS_UPLOADED', transactions: parse(event.target.result) });
    });
    reader.readAsText(file);
  }

  stockSelect(event) {
    var stockTx = stockTransactions(event.target.value);
    store.dispatch({ type: 'STOCK_SELECTED', stock: event.target.value });
    var history = fetchStockHistory(event.target.value)
  }

}

customElements.define("stocks-view", StocksView);