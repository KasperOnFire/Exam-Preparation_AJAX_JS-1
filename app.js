var apiLink = "http://restcountries.eu/rest/v1/alpha?codes=";
var dataField = document.getElementById("countryData");
var countryData;
var htmlData;
var prevCountry;

document.getElementById("svg2").addEventListener("click", function (e) {

    var me = this;
    var target = e.target;
    var countryId = target.id;
    prevCountry = countryId;
    console.log("id: " + countryId);

    switch (countryId) {
        case "ru-main":
            countryId = "ru";
            break;
        case "gb-gbn":
            countryId = "gb";
            break;
        case "gb-nir":
            countryId = "gb";
            break;
        case "ru-kgd":
            countryId = "ru";
            break;
    }
    target.style.fill = "red";

    apiLink += countryId;

    var promise = fetch(apiLink);
    promise.then(function (response) {
        countryData = response.json();
        return countryData;
    }).then(function (data) {
        htmlData = data.map(function (d) {
            return "<p>Country: " + d.name + "</p>\n" +
                "<p>Population: " + d.population + "</p>" +
                "<p>Area: " + d.area + "</p>" +
                "<p>Borders: " + d.borders.join(", ") + "</p>";
        })
        dataField.innerHTML = htmlData;
    })

});