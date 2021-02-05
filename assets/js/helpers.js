$(window).scroll(function() { // when the page is scrolled run this
    if($(this).scrollTop() != 0) { // if you're NOT at the top
        $('#home').fadeIn("fast"); // fade in
    } else { // else
        $('#home').fadeOut("fast"); // fade out
    }
});