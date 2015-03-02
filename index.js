var mapbox = require('mapbox.js'),
    $ = require('jquery'),
    config = require('./config.json');

    L.mapbox.accessToken = config.mapbox.APIToken;
    var geoJson = [];
    
var plotData = function(data){
    data.forEach(mapPointToFeature);
    var map = global.map = L.mapbox.map('map', config.mapbox.mapId)
    .setView([37.78282,-122.40783], 13) 
    .featureLayer.setGeoJSON(geoJson);
};

function mapPointToFeature(element, index, array) {
    var point = {
            "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [new Number(element.latitude.latitude), new Number(element.latitude.longitude)]
                },
                "properties": {
                    "title": element.addr_num,
                    "description": element.yr_inst,
                    "marker-color": "#fc4353",
                    "marker-size": "large",
                    "marker-symbol": "monument"
                }
    };
    geoJson.push(point);
    console.log(point);
}

$.ajax({
        url: config.data.url,
        dataType: 'json'
    })
    .done(plotData)
    .fail(function() {
        console.log("failed to make request");
    });

