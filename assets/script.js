$(document).ready(function () {   
   var searchButton = document.querySelector(".search-button");
    var searchInput = document.queryCommandIndeterm(".searchInput");
    var vesselContainer = $('.vessel');
    var nameElement = $('#name');
    var locationElement = $('#location');
    var statusElement = $('#status');
    var destinationElement = $('#destination');

    function getApi() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '31efea1da4mshbad64b2bea4d5d3p13ffe7jsn3966dcd598a9',
                'X-RapidAPI-Host': 'maritime-ships-and-ports-database.p.rapidapi.com'
            }
        };
        
        fetch(`https://maritime-ships-and-ports-database.p.rapidapi.com/api/v0/vessel_find/${searchInput}`, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data)
                displayVesselInfo();
            })
            .catch(err => console.error(err));
    }

    function displayVesselInfo(data) {
        // nameElement.text("Name: " + data.main.name);
        // locationElement.text("Location: " + data.main.location);
        // statusElement.text("Status: " + data.main.status);
        // destinationElement.text("Destination: " + data.main.destination)
    }

    searchButton.addEventListener('click', getApi);
});