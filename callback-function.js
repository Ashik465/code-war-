// A callback function is a function that is passed as an argument to another function and is executed inside that function. In other words, it is a way to pass behavior (functionality) as data to another function. The primary purpose of using callback functions is to enable asynchronous programming, handle events, or perform actions after certain operations have completed.

// Here's a simple explanation of how a callback function works:

// The main function that takes a callback as a parameter
function doSomethingAsync(callback) {
    setTimeout(function() {
      console.log("Task done after 2 seconds.");
      callback();
    }, 2000);
  }
  
  // The callback function that will be executed after the main function is done
  function callbackFunction() {
    console.log("Callback function executed.");
  }
  
  // Call the main function and pass the callback function as an argument
  console.log(doSomethingAsync(callbackFunction));
  