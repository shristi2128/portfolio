function openModal(imageElement) {
        // Get the modal and image inside the modal
        var modal = document.getElementById("imageModal");
        var fullImage = document.getElementById("fullImage");
        
        // Set the modal image source to the clicked thumbnail's source
        fullImage.src = imageElement.src;
        
        // Display the modal
        modal.style.display = "flex";
      }
      function closeModal() {
          // Hide the modal
          document.getElementById("imageModal").style.display = "none";
      }
