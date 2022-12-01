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

  var test1 = document.getElementById("input-text");
  var test2 = document.getElementById("result");
  var choice = document.getElementById("cipher-type").value;

  if(choice == "shift"){
    document.getElementById("result").value = shiftCipher(test1.value);
  }
  else{
    document.getElementById("result").value = random(test1.value);
  }
  var choice2 = document.getElementsByName("text-size");
if(choice2[0].checked == true){
  document.getElementById("result").style.fontSize = "12pt";
} 
else{
  document.getElementById("result").style.fontSize = "24pt";
}
var choice3 = document.getElementById("all-caps");
if(choice3.checked == true){
  document.getElementById("result").value = allCaps(document.getElementById("result").value);
}
  






  
  console.log("Done");

}
function reset(){
  document.getElementById("input-text").value = " ";
  document.getElementById("result").value = " ";
}
function allCaps(text){
  return text.toUpperCase();
}
function shiftCipher(text){
  text = text.toLowerCase();

  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'a';
    } else { 
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}
function random(text){
  text = text.toLowerCase();

  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'b';
    } else {
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      result += resultLetter;
    }
  }
  return result;
  //a = 97
  //z = 122
}
(function() {
  "use strict";

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
 