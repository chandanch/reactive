
/**
* @desc Creates an Observable and Observer 
*/
import { Observable } from "rxjs";


let button = document.getElementById('getMoviesBtn');
let output = document.getElementById('moviesContainer');
// 1. Create an observable using the fromEvent

let source = Observable.fromEvent(button, "click");

function getMovies(url : string) {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
        let movies = JSON.parse(xhr.responseText);
        movies.forEach(movie => {
            let moviesListContainer = document.createElement("div");
            moviesListContainer.innerText = movie.title;
            moviesListContainer.style.color = "#387EF5";
            output.appendChild(moviesListContainer);
        });  

    })

    xhr.open("GET", url);
    xhr.send();

}

// an observer which subscribe to the observable
source.subscribe(
    buttonClickevent => {
        getMovies('movies.json');
    },
    error => {
        console.log(`Error: ${error}`)
    },
    () => {
        console.log("Completed");
    }
)