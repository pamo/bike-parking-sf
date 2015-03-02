var mapbox = require('mapbox.js'),
    $ = require('jquery'),
    config = require('./config.json');

L.mapbox.accessToken = config.mapbox.APIToken;
var map = global.map = L.mapbox.map('map', config.mapbox.mapId)
    .setView([37.78282,-122.40783], 13),
    geocoder = L.mapbox.geocoder('mapbox.places-v1');

var plotData = function(data){
    console.log(data);       
};

$.ajax({
        url: config.data.url,
        dataType: 'json'
    })
    .done(plotData)
    .fail(function() {
        console.log("failed to make request");
    });

