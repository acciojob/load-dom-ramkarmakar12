//your JS code here. If required.
//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Create a new div element
  var newDiv = document.createElement("div"); 

  // Create a text node with the message
  var newContent = document.createTextNode("DOM load success"); 

  // Add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // Add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
});
