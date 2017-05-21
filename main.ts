/**
* @desc Creates an Observable and Observer 
*/

import { Observable } from "rxjs";

var scores = [21,24,25,26,28];

// Pass a function with observer object as a parameter to create method
let source = Observable.create(observer => {
    var index = 0;
    // Function to provide values to the observable.next() by incrementing the index
    let produceValues = () => {
        // send the scores to the data stream through the index of the scores array
        observer.next(scores[index++]);
        if(index < scores.length) {
            setTimeout(produceValues, 2000);
        } 
        else {
            // once all the data has been sent through data stream
            observer.complete();
        }
    }
    produceValues();
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