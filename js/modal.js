// Get the modal
var viewResumeModal = document.getElementById("viewResumeModal");

// Get the button that opens the modal
var viewButton = document.getElementById("viewButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
viewButton.onclick = function() {
    viewResumeModal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    viewResumeModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == viewResumeModal) {
    viewResumeModal.style.display = "none";
  }
}