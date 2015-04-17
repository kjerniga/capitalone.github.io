$.getJSON('config/section-intro.json', function (data) {
    document.getElementById("contents-intro").innerHTML = getIntroSection(JSON.stringify(data));
    $('.carousel').carousel();
});

function getIntroSection(data) {
    var html = "";
    html += "<div class='container'>";
    html += "<div class='carousel slide' data-ride='carousel'>"
    html += "<div class='carousel-inner' role='listbox'>";
    var elementNumber = 0;
    var json = JSON.parse(data);
    for (var subsection in json) {
        var header = json[subsection].header;
        var text = json[subsection].text;
        if (elementNumber === 0) {
            html += "<div class='item active'>";
        }
        else {
            html += "<div class='item'>";
        }
        html += "<div class='row'>";
        html += "<div class='col-md-6 col-md-offset-3'>";
        html += "<h1 class='section-header'>" + header + "</h1>";
        html += "<hr>";
        html += "</div>";
        html += "</div>";
        html += "<div class='row'>";
        html += "<div class='col-md-8 col-md-offset-2'>";
        html += "<p class='intro-text'>" + text + "</p>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        elementNumber++;
    }
    html += "</div>";
    html += "</div>";
    html += "</div>";
    return html;
}