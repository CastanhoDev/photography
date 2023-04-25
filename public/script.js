function openImage(src) {
    // Get the popup image element
    var popupImage = document.getElementById("popup-image");
    
    // Set the source of the popup image
    console.log(src);
    popupImage.src = src;
    
    // Display the overlay
    var overlay = document.querySelector(".overlay");
    overlay.classList.add("active");
  }
  function closeImage() {
    // Hide the overlay
    var overlay = document.querySelector(".overlay");
    overlay.classList.remove("active");
  }
