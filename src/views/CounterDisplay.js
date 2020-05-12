import { html } from 'lit-element';
import AbstractElement from './AbstractElement.js';
import '@google-web-components/google-chart';


export default class CounterDisplay extends AbstractElement {
   
    
    render() {
        return html`
        <style>
        google-chart {
            height: 50%;
            width: 50%;
        }
        </style>
        <h1>${this.state.settings.count}</h1>
        <google-chart data='[["Month", "Days"], ["Jan", 31]]'></google-chart>
      </google-chart>
      <h1>after chart</h1>
        `;
    }
}

customElements.define("counter-display", CounterDisplay);
