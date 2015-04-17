
//Background Slideshow
$('#background-slideshow').load('assets/html/background-slideshow.html');

//About Section
$('#section-about').load('assets/html/section-about.html', function () {
    $.getScript("assets/js/contents-about.js");
});

//Introduction Section
$('#section-intro').load('assets/html/section-intro.html', function () {
    $.getScript("assets/js/contents-intro.js");
});

//Menu Section
$('#section-menu').load('assets/html/section-menu.html', function () {
    $.getScript("assets/js/contents-menu.js");
});

//Source Code Section
$('#section-source-code').load('assets/html/section-source-code.html', function () {
    $.getScript("assets/js/contents-source-code.js");
});