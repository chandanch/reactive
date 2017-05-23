/**
* @desc Creates an Observable and Observer 
*/
//import { Observable } from "rxjs";

// import only the modules and operators required
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

var scores = [2,4,6,8];

// Pass a function with observer object as a parameter to create method
let source = Observable.create(observer => {
    var index = 0;
    // Function to provide values to the observable.next() by incrementing the index
    let produceValues = () => {
        // send the scores to the data stream through the index of the scores array
        observer.next(scores[index++]);
        // check if the index is less the scores array length
        if(index < scores.length) {
            // invoke the producevalues after 2000ms delay
            setTimeout(produceValues, 200);
        } 
        else {
            // once all the data has been sent through data stream
            observer.complete();
        }
    }
    produceValues();
})
/* Use the map operator to perform processing, 
   here we are multiplying the value that we obtain 
*/
.map(n => n * 3)
// filter operator to filter the data by passing the filter expression
.filter(n => n>6);

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