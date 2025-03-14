"use strict";
 import TBootstrapComponent from "./bootstrapComponents.js";
 
 class TMainMenu extends TBootstrapComponent {
   constructor(){
     super();
     this.attachShadow({mode: "open"});
   }
 
   render(){
     const template = document.getElementById("main-menu-template");
     const content = template.content.cloneNode(true);
     this.shadowRoot.appendChild(content);
     this.#createMenuManager();
    }
  
    #createMenuManager(){
      const menuItems = this.shadowRoot.querySelectorAll("a[page-data]");
      for(let i = 0; i < menuItems.length; i++){
        const menuItem = menuItems[i];
          //Vi må lage en ikke navngitt pilfunksjon pga. eventlytteren
          menuItem.addEventListener("click",
          () => {
            console.log("Navigating to " + menuItem.getAttribute("page-data"));
          });
      }
   }
   #navigateToPage(aMenuItem){
   const pageName = aMenuItem.getAttribute("page-data");
   console.log("Navigationg to " + pageName);

   const bodyContent = document.getElementById("body-content");
   bodyContent.innerHTML = `<${pageName}-page></${pageName}-page`;
   }
 }
 customElements.define("main-menu", TMainMenu);