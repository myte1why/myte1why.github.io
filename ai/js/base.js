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
});
