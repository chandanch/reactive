/**
* @desc Creates an Observable and Observer 
*/

import { Observable } from "rxjs";

var scores = [12,34,5,6,7];

// Pass a function with observer object as a parameter to create method
let source = Observable.create(observer => {
    // Iterate through the scores and send the each score to the data stream using next()
    for(let score of scores) {
        // if (score === 5) {
        //     observer.error("Something went wrong");
        // }
        observer.next(score);
    }
    // once all the data has been sent through data stream
    observer.complete();
});

// an observer which subscribe to the observable
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