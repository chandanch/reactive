import { Observable, Observer } from "rxjs";

var scores = [12,34,5,6,7];

var source = Observable.from(scores);

source.subscribe(
    data => {
        console.log("Data Recieved:", data);
    },
    error => {
        console.log(`Error: ${error}`)
    },
    () => {
        console.log("Completed");
    }
)
// class MyObserver implements Observer<number> {

//     next(value) {
//         console.log(`value: ${value}`);
//     }

//     error(e) {
//         console.log(`error: ${e}`)
//     }

//     complete() {
//         console.log("Task completed");
//     }
// }

// source.subscribe(new MyObserver());
// source.subscribe(new MyObserver());