$.getJSON('config/section-source-code.json', function (data) {
    document.getElementById("contents-source-code").innerHTML = getSourceCodeSection(JSON.stringify(data));
});

function getSourceCodeSection(data) {
    var html = "";
    html += "<div class='container'>";
    var json = JSON.parse(data);
    for (var elementGroup in json) {
        html += "<div class='row'>";
        html += "<div class='col-md-6 col-md-offset-3'>";
        html += "<h1 class='section-header'>" + elementGroup + "</h1>";
        html += "<hr>";
        html += "</div>";
        html += "</div>";
        var elementNumber = 0;
        for (var element in json[elementGroup]) {
            var name = json[elementGroup][element].name;
            var image = json[elementGroup][element].image;
            var description = json[elementGroup][element].description;
            var gitHubUrl = json[elementGroup][element].git_hub_url;
            if (elementNumber % 3 === 0) {
                html += "<div class='row'>";
                html += "<div class='col-md-2 col-md-offset-2'>";
            }
            else {
                html += "<div class='col-md-2'>";
            }
            html += "<h4 class='source-code-header'>" + name + "</h4>";
            html += "<div class='floater'>";
            html += "<a href='" + gitHubUrl + "' target='_blank'>";
            html += "<img src='" + image + "' width=100px />";
            html += "</a>";
            html += "</div>";
            html += "<p class='source-code-text'>" + description + "</p>";
            html += "</div>";
            if ((elementNumber + 1) % 3 === 0 || Object.keys(json).length == elementNumber) {
                html += "</div>";
            }
            else {
                html += "<div class='col-md-1'></div>";
            }
            elementNumber++;
        }
    }
    html += "</div>";
    console.log(html);
    return html;
}
