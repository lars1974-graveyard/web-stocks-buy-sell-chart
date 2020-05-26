import { html } from 'lit-element';
import AbstractElement from './AbstractElement.js';
import '@google-web-components/google-chart';


export default class CounterDisplay extends AbstractElement {
   
    
    render() {
        if(this.state["settings"]["rates"] != undefined){
            var data = this.state["settings"]["rates"]["dates"][0]["rates"];
            console.dir(data);
            var json = "[ [ \" ja \", \" nej \"], ";
            var vals = Object.values(data);
            
            Object.keys(data).forEach(function(key,index) {  
                console.log(key);
                if(index != 0) json = json + ", "
                json = json + "[\"" + key + "\", "+ vals[index] +"]";
            });
            json = json + "]";
            console.log(json);
            
            
            return html`
        
        <style>
        google-chart {
            height: 50%;
            width: 100%;
        }
        </style>
        <h1>${this.state.settings.count}</h1>
        <google-chart data='${json}'
       
        ></google-chart>
        `;
    }
    else return  html`<h1>No rates yet</h1>`;
    }

}

customElements.define("counter-display", CounterDisplay);
