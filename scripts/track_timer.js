const clock = document.getElementById("clock");

clock.addEventListener('tick_tock', function(e) {
        clock.textContent = e.detail.time;
        clock.style.color = e.detail.textColor;
    });


function tickTock(time,color) {
    const event = new CustomEvent('tick_tock', {
        detail: {
            time: time,
            textColor: color
        }
    });
    clock.dispatchEvent(event);
}

function num(num) {
    return Math.floor(Math.random()*num);
}

function makeColor() {
    return "rgb(0,"+num(256)+","+num(256)+")";
}

setInterval(function() { tickTock(new Date().toLocaleTimeString(),makeColor()) },100);

// EventEmitter

// Create an EventEmitter that registers handlers and runs those handlers when events are emitted.

//     emit - should emit an event, accepting any number of args, calling all event handlers
//     on - register an event listener with a handler
//     once - register an event listener that runs exactly once
//     many - register an event listener that runs n times
//     remove - remove a handler for an event
//     removeAll - remove all handlers for an event

/*** HANDLERS ***/

const timer = document.getElementById("track_timer");

var handlers = [];

function emit(...handlers) {
    handlers.forEach(

    );
}

function on(event_type,listener) {
    timer.addEventListener(event_type,listener);
}

function once(event_type,listener) {
    timer.addEventListener(event_type,listener);
}

function many() {
    timer.addEventListener(event_type,listener);
}

function remove(event_type,listener) {
    timer.removeEventListener(event_type,listener);
}

function removeAll() {

}

// Timer

// Create a Timer that runs every n milliseconds until stopped. Timer actions (jobs) may be synchronous or asynchronous. For long running jobs the timer should not start another while the first is in progress.

//     initialization - interval, an action to perform, if timer should auto start (consider the implications of this for event listeners), if it should ignore any errors that might occur in the passed action.
//     start - method that begins the timer
//     stop - method that stops the timer
//     interval - a property for retrieving and setting the timer interval, ensure it only accepts positive numeric values



// Events

// Using your EventEmitter emit the following Timer events.

//     timerStart - emitted when the timer starts
//     timerPerform - emitted before the timer performs its designated action
//     timerDone - emitted after a timer cycle completes
//     timerError - emitted when a timer action has an error
//     timerStop - emitted when a timer is stopped



// Bonus

//     track timer action executions
//     optionally allow multiple running jobs
//     optionally allow the timer to run n times
//     create static functionality to hold all created timers
//     waitTime - returns time in milliseconds until next execution
