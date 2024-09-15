// script.js

// Define the function and attach it to the global window object
window.openModal = function(imageElement) {
    var modal = document.getElementById("imageModal");
    var fullImage = document.getElementById("fullImage");
    
    fullImage.src = imageElement.src;
    modal.style.display = "flex";
};

window.closeModal = function() {
    document.getElementById("imageModal").style.display = "none";
};
