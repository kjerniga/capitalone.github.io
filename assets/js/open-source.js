$.getJSON('config/open-source-section.json', function (data) {
    document.getElementById("open-source-contents").innerHTML = getOpenSourceSection(JSON.stringify(data));
});

function getOpenSourceSection(data) {
    var elementsHtml = "";
    var json = JSON.parse(data);
    for (var element in json) {
        var name = json[element].name;
        var image = json[element].image;
        var description = json[element].description;
        var gitHubUrl = json[element].git_hub_url;
        elementsHtml += "<div class='col-xs-12 col-sm-4 col-md-4 col-lg-4'>";
        elementsHtml += "<h4 class='text-left header'>" + name + "</h4>";
        elementsHtml += "<div class='floater'>";
        elementsHtml += "<a href='" + gitHubUrl + "' target='_blank'>";
        elementsHtml += "<img src='" + image + "' width=100px />";
        elementsHtml += "</a>";
        elementsHtml += "</div>";
        elementsHtml += "<p>" + description + "</p>";
        elementsHtml += "<span class='vertical-whitespace'/>";
        elementsHtml += "</div>";
    }
    return elementsHtml;
}