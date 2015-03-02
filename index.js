require('mapbox.js');
var config = require('./config.json');

L.mapbox.accessToken = config.mapbox.APIToken;
var map = global.map = L.mapbox.map('map', config.mapbox.mapId)
    .setView([37.78282,-122.40783], 13),
        geocoder = L.mapbox.geocoder('mapbox.places');
