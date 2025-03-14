"use strict";
import TBootstrapComponent from "./bootstrapComponents.js";
import movieList from "./movieList.js";

export class TMovie{
    constructor(){
        this.title = "";
        this.director = "";
        this.genre = "";
        this.year = "1900";
        this.rating = 0; // 1 til 10
    }
}

export class TMyMovies extends TBootstrapComponent {
    #movies;
    #htmlTable;
    constructor(){
        super();
        //Hvis vi ikke har noen filmer, så lager vi en tom liste
        this.#movies = movieList|| [];
        this.#htmlTable = null;
        this.attachShadow({mode: "open"});
    }

    #loadMovies(){
        //Oppdater antall filmer i totalMovies
        const totalMovies = this.shadowRoot.getElementById("totalMovies");
        totalMovies.textContent = this.#movies.length.toString();
        //lage dynamisk rader for hver film
        for(let i = 0; i < this.#movies.length; i++){
            const movie = this.#movies[i];
            const row = document.createElement("tr");
            const td = document.createElement("td");

            td.textContent = movie.title;
            row.appendChild(td);

            td = document.createElement("td");
            td.textContent = movie.director.join(", ");
            row.appendChild(td);

            //Legger til år
            td = document.createElement("td");
            td.textContent = movie.year.join(", ");
            row.appendChild(td);

            //legger til sjanger
            td = document.createElement("td");
            td.textContent = movie.genre.join(", ");
            row.appendChild = movie.genre;

            //legger til rating
            td = document.createElement("td");
            td.textContent = movie.rating.toString();
            row.appendChild = movie.rating,

            //Legg til raden i tabellen
            this.#htmlTable.appendChild(row);


        }
    }

    render(){
        const template = document.getElementById("my-movies-page-template");
        const content = template.content.cloneNode(true);
        this.shadowRoot.appendChild(content);
        this.#htmlTable = this.shadowRoot.getElementById("table-body");
        this.#loadMovies();
    }
}

customElements.define("movies-page", TMyMovies);