
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
function getData(url : string) {
    // returns an observable
    return Observable.create(observer => {
        // Create an XHMLHTTPRequest object
        let xhr = new XMLHttpRequest();
        // event handler for handling the response from the server
        xhr.addEventListener("load", () => {
            // parse the response and add to the movies
            let movies = JSON.parse(xhr.responseText);
            // Pass the data received to the Observer
            observer.next(movies);
            // all the data are recieved from the server. 
            observer.complete();
        })

        // open an HTTP request with get and pass the url
        xhr.open("GET", url);
        // send the http request
        xhr.send();
    })
}

/**
 * @desc Render movies on the page
 * @param movies 
 */
function renderMovies(movies) {
    // for each movie add the movie to the moviesListcontainer
    movies.forEach(movie => {
        let moviesListContainer = document.createElement("div");
        moviesListContainer.innerText = movie.title;
        moviesListContainer.style.color = "#387EF5";
        moviesListContainer.style.fontFamily = 'cursive'
        // append the movie the movies container
        moviesContainer.appendChild(moviesListContainer);
    });
}

// Get movies is not invoked since it is not subscribed to the observable
// getData("movies.json");

// once we subscribe to observable then the HTTP requests are made to get the data
getData("movies.json").subscribe(renderMovies); 

// an observer which subscribe to the observable
/* using flatmap to subscribe for inner obervable 
* flatmap detects that there is an inner observable and 
* subscribes to the inner obervable and delivers data through the pipeline,
* into the next handler which is produced by inner observable.
*/
source.flatMap(buttonClickEvent => getData("movies.json"))
    .subscribe(
        renderMovies,
        error => {
            console.log(`Error: ${error}`)
        },
        () => {
            console.log("Completed");
        }
    )