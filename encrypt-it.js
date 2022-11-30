console.log("Window loaded!");
/*
 * Starter file 
 */
function spoke(){
  console.log("IT SPOKE");
}
//cyType, fSize, caps
function encrypt(){
  console.log("Running Encryption");
  /*var n1 = document.getElementById('n1');
  var n2 = document.getElementById('n2');
  n2.value = n1.value; */
  var test1 = document.getElementById("input-text");
  var test2 = document.getElementById("result");
  document.getElementById("result").value = test1.value;
  console.log("Done");
 /* fSize = document.getElementsByName("text-size").value;
  document.getElementById("result").style.fontSize = fSize;*/
}
(function() {
  "use strict";
  console.log("Derp");
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  
  function init() {
    console.log("IN INIT");
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
 