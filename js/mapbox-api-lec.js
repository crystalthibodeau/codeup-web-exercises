
console.log("hello from mapbox-api-lec.js");
/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

mapboxgl.accessToken = mapboxToken;


var mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    // zoom: 10,
    zoom: 12,
    pitch: 65,
    center: [-98.4916, 29.4252],
    sprite: "mapbox://sprites/mapbox/bright-v8"
    // interactive: false
};
var map = new mapboxgl.Map(mapOptions);

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.
// TODO TOGETHER: Change the color of the marker

var markerOptions = {
    color: "blue",
    draggable: true
};
var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.4816, 29.4260])
    .addTo(map);
console.log(marker._lngLat.lng);
console.log(marker._lngLat.lat);

// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"
// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.

// var popup = new mapboxgl.Popup()
//         .setLngLat([-98.489615, 29.426827])
//         .setHTML("<h3>Codeup Rocks!</h3>")
//         .addTo(map);
//
// var alamoPopup = new mapboxgl.Popup()
//     .setHTML("<p>Remember The Alamo!</p>")
//     .addTo(map);
// //
// marker.setPopup(alamoPopup);

// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"



/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding
// mapboxgl.accessToken = mapboxToken;
//
//
// var mapOptions = {
//     container: 'map',
//     style: 'mapbox://styles/mapbox/light-v10',
//     // zoom: 10,
//     zoom: 12,
//     pitch: 65,
//     center: [-98.4916, 29.4252],
//     sprite: "mapbox://sprites/mapbox/bright-v8"
//     // interactive: false
// };
// var map = new mapboxgl.Map(mapOptions);

// geocode("600 Navarro st, San Antonio TX, 78025", mapboxToken).then(function(result){
//     console.log(result);
//     // recenter
//     map.setCenter(result);
// });
//
// geocode("9514 Amber Dawn, Helotes TX, 78023", mapboxToken).then(function(result){
//     console.log(result);
//     map.setCenter(result);
//     map.setZoom(18);
// });


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.


//TODO: Using the geocode method above, add a marker at Codeup to the map

// geocode("600 Navarro st, San Antonio TX, 78025", mapboxToken).then(function(result){
    // console.log(result);
    //recenter
    // map.setCenter(result);
//
//     var codeupMarker = new mapboxgl.Marker(markerOptions)
// .setLngLat([-98.4816, 29.4260])
// .addTo(map);
// });
//TODO: Instead of setCenter try using map.jumpTo()
// geocode("600 Navarro st, San Antonio TX, 78025", mapboxToken).then(function(result){
//     // console.log(result);
//     //recenter
//     map.jumpTo(result);
//
//     var codeupMarker = new mapboxgl.Marker(markerOptions)
//         .setLngLat([-98.4816, 29.4260])
//         .addTo(map);
// });

//TODO: Instead of setCenter try using map.flyTo()
// geocode("600 Navarro st, San Antonio TX, 78025", mapboxToken).then(function(result){
//     // console.log(result);
//     //recenter
//     map.flyTo(result);
//
//     var codeupMarker = new mapboxgl.Marker(markerOptions)
//         .setLngLat(result)
//         .addTo(map);
// });


// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo

// TODO: Reverse geocode coordinates of your choice using the reverse geocode method

// reverseGeocode({lng: -98.4861, lat: 29.4260}, mapboxToken).then(function (result){
//     console.log(result);
// });


