import {
    LitElement,
    html
} from 'lit-element';


class SimpleGreeting extends LitElement {
    static get properties() {
        return {
            name: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.name = 'Hello Polymer';
    }


    render() {
        console.log('I"m speaking from custom element',this.name);
        return html `
        <button type="button">I am cutome Element  ${this.name} </button>
        `;

    }
}

customElements.define('app-tejas', SimpleGreeting);