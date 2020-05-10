import { LitElement } from 'lit-element';
import { store } from '../state.js'

export default class AbstractElement extends LitElement {
    connectedCallback() { 
        this.unsubscribe = store.subscribe(_ => this.triggerViewUpdate());
        this.triggerViewUpdate();
    }

    disconnectedCallback() { 
        this.unsubscribe();
    }

    triggerViewUpdate() { 
        this.state = store.getState();
        this.update();
    }

    dispatch(arg){
        store.dispatch(arg);
    }
}