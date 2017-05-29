
/**
* @desc Creates an Observable and Observer 
*/
import { Observable } from "rxjs";


let circle = document.getElementById('circle');
// 1. Create an observable using the fromEvent
// 2. Pass the document and movemove as the event to the fromEvent
let source = Observable.fromEvent(document, "mousemove")
    /* 3. Process the data recieved from the mouse event, since the mouse event 
    * returns many properties we capture and process only the clientx and clienty
    */
    .map((e: MouseEvent) => {
        // 4.For every mouse event 'e' pass the event to the function which will return an object
        return {
            // get the clientX property
            x: e.clientX,
            // get the clientY property
            y: e.clientY
        }
    })
    // Emit the events for which the clientX is less than 1000
    .filter(value => value.x < 1000)
    // Using the temporal operator send the data to observer after 300ms delay
    .delay(300);

function onNext(value) {
    circle.style.left = value.x;
    circle.style.top = value.y;
}
// an observer which subscribe to the observable
source.subscribe(
    //the onNext is used to handle the data values recieved
    onNext, 
    error => {
        console.log(`Error: ${error}`)
    },
    () => {
        console.log("Completed");
    }
)