$.getJSON('config/data.json', function (data) {
    document.getElementById("open-source-elements").innerHTML = getElementsHtml(JSON.stringify(data));
});

function getElementsHtml(data) {
    var elementsHtml = "";
    var json = JSON.parse(data);
    for (var element in json) {
        var name = json[element].name;
        var description = json[element].description;
        var gitHubUrl = json[element].git_hub_url;
        elementsHtml += "<div class='col-xs-12 col-sm-4 col-md-4 col-lg-4'>";
        elementsHtml += "<h1 class='text-left'>" + name + "</h1>";
        elementsHtml += "<div class='floater'>";
        elementsHtml += "<img src='assets/art/images/white_capital_one_logo.png' width=250px href='" + gitHubUrl + "' />";
        //elementsHtml += "<iframe src='" + gitHubUrl + "' class='thumbnail' scrolling='no'>";
        //elementsHtml += "</iframe>";
        elementsHtml += "</div>";
        elementsHtml += "<p>" + description + "</p>";
        elementsHtml += "<span class='vertical-whitespace'/>";
        elementsHtml += "</div>";
    }
    return elementsHtml;
}