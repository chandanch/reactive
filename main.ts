
/**
* @desc Creates an Observable and Observer 
*/
import { Observable } from "rxjs";


let getMoviesBtn = document.getElementById('getMoviesBtn');
let moviesContainer = document.getElementById('moviesContainer');
// Create an observable using the fromEvent

// observable to handle button click 
let source = Observable.fromEvent(getMoviesBtn, "click");

/**
 * @desc Get the data by making HTTP request
 * @param url
 */
function getMovies(url : string) {
    // Create an XHMLHTTPRequest object
    let xhr = new XMLHttpRequest();

    // event handler for handling the response from the server
    xhr.addEventListener("load", () => {
        // parse the response and add to the movies
        let movies = JSON.parse(xhr.responseText);
        // for each movie add the movie to the moviesListcontainer
        movies.forEach(movie => {
            let moviesListContainer = document.createElement("div");
            moviesListContainer.innerText = movie.title;
            moviesListContainer.style.color = "#387EF5";
            // append the movie the movies container
            moviesContainer.appendChild(moviesListContainer);
        });  

    })

    // open an HTTP request with get and pass the url
    xhr.open("GET", url);
    // send the http request
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