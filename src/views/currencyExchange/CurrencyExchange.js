import { html } from 'lit-element';
import AbstractElement from '../AbstractElement.js';
import CounterDisplay from './CounterDisplay';
import CounterControl from './CounterControl';


export default class CurrencyExchange extends AbstractElement {


    render() {
        return html`
            <counter-control></counter-control>
            <counter-display></counter-display>
        `;
    }
}

customElements.define("currency-exchange", CurrencyExchange);
