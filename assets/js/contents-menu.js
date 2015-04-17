$.getJSON('config/section-menu.json', function (data) {
    document.getElementById("contents-menu").innerHTML = getMenuSection(JSON.stringify(data));
});

function getMenuSection(data) {
    var json = JSON.parse(data);
    var html = "";
    html += "<div class='navbar navbar-inverse navbar-fixed-top' id='menu-section'>";
    html += "<div class='container'>";
    html += "<div class='navbar-header'>";
    html += "<a class='navbar-brand' href='" + json.image_url + "'>";
    html += "<img src='" + json.image + "' height='25px'/>";
    html += "</a>";
    html += "<a class='navbar-brand' href='#'>" + json.header + "</a>";
    html += "</div>";
    html += "<div class='navbar-collapse collapse'>";
    html += "<ul class='nav navbar-nav navbar-right'>";
    html += "<li class='active'><a href='#section-intro'>" + json.tab1 + "</a></li>";
    html += "<li><a href='#section-core'>" + json.tab2 + "</a></li>";
    html += "<li><a href='#section-conclusion'>" + json.tab3 + "</a></li>";
    html += "</ul>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
    return html;
}