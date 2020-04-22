import { render } from '../lib/lit-html.js';
import { store } from '../state.js'

export default class AbstractElement extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }
    log(methodName) { 
        return `${this.constructor.name}.${methodName}`
    }

    connectedCallback() { 
        this.unsubscribe = store.subscribe(_ => this.triggerViewUpdate());
        this.triggerViewUpdate();
    }

    disconnectedCallback() { 
        this.unsubscribe();
    }

    triggerViewUpdate() { 
        this.state = this.extractState(store.getState());
        const template = this.view();
        render(template, this.root);
    }

    getRenderTarget() { 
        return this;
    }

    extractState(reduxState) { 
        return reduxState;
    }

    view() { }
}