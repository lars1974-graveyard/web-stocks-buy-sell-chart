import { html, css } from 'lit-element';
import AbstractElement from '../AbstractElement.js';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-menu-button/paper-menu-button';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/app-layout/app-layout';
import '@polymer/iron-media-query/iron-media-query';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-listbox/paper-listbox';


export default class Polyelements extends AbstractElement {
    render() {
      
        return html`
        <div class="bg">

        <app-toolbar>
        <paper-icon-button icon="menu"></paper-icon-button>
        <paper-button>Button1</paper-button>
        <paper-button>Button1</paper-button>

        <paper-button>Button4</paper-button>
     
      

        
        <div main-title>App name</div>
        <paper-menu-button>
        <paper-icon-button icon="menu" slot="dropdown-trigger"></paper-icon-button>
        <paper-listbox slot="dropdown-content">
          <paper-item>Share</paper-item>
          <paper-item>Settings</paper-item>
          <paper-item>Help</paper-item>
        </paper-listbox>
      </paper-menu-button>
      </app-toolbar>


      </div>
        `;
    }

    static get styles() {
        return [css`
        .bg {
            background-color: lime;
          
        }
        `];
    }

    
}

customElements.define("polyelements-page", Polyelements);