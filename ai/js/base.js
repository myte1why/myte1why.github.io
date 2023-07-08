$(document).ready(function() {
    // Get the user's language
    var userLang = navigator.language || navigator.userLanguage;

    // Set the active tab based on the user's language
    if (userLang.includes('tr')) {  // For Turkish users
        $('#tab1').addClass('active');
        $('#tab-link1').addClass('active');
    } else {  // For all other users
        $('#tab2').addClass('active');
        $('#tab-link2').addClass('active');
    }

    $('.tab-link').click(function(e) {
        e.preventDefault();

        // remove active class from all tab links and tabs
        $('.tab-link').removeClass('active');
        $('.tab').removeClass('active');

        // add active class to clicked tab link and its corresponding tab
        $(this).addClass('active');
        $($(this).attr('href')).addClass('active');
    });
    // Add a class to the gallery container to easily target it
    const galleryContainer = document.querySelector('#container');

    // Create a function to show the gallery and hide the preloader
    function showGallery() {
      galleryContainer.style.display = 'block';
      // Remove the preloader element or hide it
      // depending on your implementation
    }

    // Use the window.onload event to ensure all resources are loaded
    window.onload = function() {
      // Call the showGallery function to display the gallery
      showGallery();
    };
});
