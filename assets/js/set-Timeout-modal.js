// Function to show the modal after 40 seconds
function showModal() {
    let modal = document.getElementById("reviewModal");
    modal.style.display = "block";
}

// Set a timer to show the modal after 40 seconds
setTimeout(showModal, 4000);

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("succesmodal-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    let modal = document.getElementById("reviewModal");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    let modal = document.getElementById("reviewModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}