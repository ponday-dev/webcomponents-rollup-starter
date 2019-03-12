import { LitElement, html, property } from 'lit-element';

export class MyElement extends LitElement {

    @property({ type: String })
    name = '';

    render() {
        return html`<div>Hello, ${this.name}</div>`;
    }
}