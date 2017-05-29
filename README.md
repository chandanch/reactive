# Reactive Programming using RxJS
## Understanding the reactive programming better

Topics covered:
### Part-1
* Creating an observable
* Subscribing the observable using observer
* Using the Observer interface

### Part-2
* Using the `Observable.create()` method
* Passing the funtion as a parameter to the `create()`
* Passing the **observer object** as a parameter to the function
* Using the `observer.next()` to send the data to data stream
* using the `observer.complete()` to indicate the complete
* using the `observer.error()` to emit the error to the observer(Will be handled in depth later)

### Part-3
* Pass the data to datastream asynchronously via `setTimeout()`

### Part-4
* Introduction to operators
* Categories of operators
* using map operator
* using filter operator

### Part-5
* Impact of imports on file size and browser
* Import only what is required

### Part-6 (Advanced)
* Introducing a new data source through mouse events
* Using the `fromEvent()` to get the data from `mousemove`
* Processing the data using `map()` and extracting the `clientX` and `clientY` values for event
* Using `filter()` to filter the data
* creating a circular div and passing the `left` and `top` style values dynamically to track the mouse movement