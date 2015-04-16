$.getJSON('config/about-section.json', function (data) {
    document.getElementById("about-contents").innerHTML = getAboutSection(JSON.stringify(data));
});

function getAboutSection(data) {
    var elementsHtml = "";
    var json = JSON.parse(data);
    var header = json["about"].header;
    var text = json["about"].text;
    elementsHtml += "<div class='container animate-in' data-anim-type='fade-in-up'>";
    elementsHtml += "<div class='row text-center header'>";
    elementsHtml += "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
    elementsHtml += "<h3>" + header + "</h3>";
    elementsHtml += "<hr/>";
    elementsHtml += "</div>";
    elementsHtml += "</div>";
    elementsHtml += "<div class='row animate-in text-center' data-anim-type='fade-in-up'/>";
    elementsHtml += "<div class='col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2'>";
    elementsHtml += "<p>" + text + "</p>";
    elementsHtml += "</div>";
    elementsHtml += "</div>";
    console.log(elementsHtml);
    return elementsHtml;
}