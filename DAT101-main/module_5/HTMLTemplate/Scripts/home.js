"use strict";
import TBootstrapComponent from "./bootstrapComponents.js";

class THome extends TBootstrapComponent {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

render(){
    const template = document.getElementById("home-page-template");
    const content = template.content.cloneNode(true);
    template.content.cloneNode(true);
     this.shadowRoot.appendChild(content);
    }
}

customElements.define("home-page", THome);