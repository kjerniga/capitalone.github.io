$.getJSON('config/section-source-code.json', function (data) {
    document.getElementById("contents-source-code").innerHTML = getSourceCodeSection(JSON.stringify(data));
});

function getSourceCodeSection(data) {
    var html = "";
    html += "<div class='container'>";
    var json = JSON.parse(data);
    var elementNumber = 0;
    for (var element in json) {
        var name = json[element].name;
        var image = json[element].image;
        var description = json[element].description;
        var gitHubUrl = json[element].git_hub_url;
        if (elementNumber % 3 === 0) {
            html += "<div class='row'>";
            html += "<div class='col-md-2 col-md-offset-2'>";
        }
        else {
            html += "<div class='col-md-2'>";
        }
        html += "<p>" + name + "</p>";
        html += "</div>";
        if ((elementNumber + 1) % 3 === 0 || Object.keys(json).length - 1 == elementNumber) {
            html += "</div>";
        }
        else{
            html += "<div class='col-md-1'></div>";
        }
        //html += "<div class='col-xs-12 col-sm-4 col-md-4 col-lg-4'>";
        //html += "<h4 class='text-left header'>" + name + "</h4>";
        //html += "<div class='floater'>";
        //html += "<a href='" + gitHubUrl + "' target='_blank'>";
        //html += "<img src='" + image + "' width=100px />";
        //html += "</a>";
        //html += "</div>";
        //html += "<p>" + description + "</p>";
        //html += "<span class='vertical-whitespace'/>";
        //html += "</div>";
        elementNumber++;
    }
    html += "</div>";
    return html;
}



//var html = "";
//html += "<div class='container-fluid'>";
//var json = JSON.parse(data);
//for (var subsection in json) {
//    var header = json[subsection].header;
//    var text = json[subsection].text;
//    html += "<div class='row'>";
//    html += "<div class='col-md-8 col-md-offset-2'>";
//    html += "<h1>" + header + "</h1>";
//    html += "</div>";
//    html += "</div>";
//    html += "<div class='row'>";
//    html += "<div class='col-md-8 col-md-offset-2'>";
//    html += "<p>" + text + "</p>";
//    html += "</div>";
//    html += "</div>";
//}
//html += "</div>";
//return html;