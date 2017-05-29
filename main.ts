
/**
* @desc Creates an Observable and Observer 
*/
import { Observable } from "rxjs";

let circle = document.getElementById('circle');
let source = Observable.fromEvent(document, "mousemove")
    .map((e: MouseEvent) => {
        return {
            x: e.clientX,
            y: e.clientY
        }
    })
    .filter(value => value.x < 1000)
    .delay(300);

function onNext(value) {
    circle.style.left = value.x;
    circle.style.top = value.y;
}
// an observer which subscribe to the observable
source.subscribe(
    onNext,
    error => {
        console.log(`Error: ${error}`)
    },
    () => {
        console.log("Completed");
    }
)