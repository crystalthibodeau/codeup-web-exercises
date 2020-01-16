(function() {
    "use strict";
    $(document).ready(function() {

// <!--/*========================================Start Of Main Function============================================*/-->


        $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ac0657a1f6150fc148099fb06e9582aa/37.8267,-122.4233").done(function(data){

// <!--/*==================================Start Of Variable Initialization========================================*/-->
            var front1 = $('#front1');
            var front2 = $('#front2');
            var front3 = $('#front3');

            var weatherDay1 = $('#weatherDay1');
            var weatherDay2 = $('#weatherDay2');
            var weatherDay3 = $('#weatherDay3');
            var header2 = $('#header2');
            var imgSrc = "img/" + data.daily.data[0].icon + '.png';
            var imgSrcBackground1 = "url('" + "img/background-" + data.daily.data[0].icon + '.jpg' + "'" + ")";
            var imgSrcBackground2 = "url('" + "img/background-" + data.daily.data[1].icon + '.jpg' + "'" + ")";
            var imgSrcBackground3 = "url('" + "img/background-" + data.daily.data[2].icon + '.jpg' + "'" + ")";



            var day1Date = new Date(data.currently.time * 1000); //digits missing off of time call to save memory the multiplication here fixes the time
            var day2Date =  new Date((data.daily.data[1].time) * 1000);
            var day3Date =  new Date((data.daily.data[2].time) * 1000);

            var day1Split = day1Date.toString().split(' ');
            var joined1 = day1Split[0] + " " + day1Split[1] + " " + day1Split[2];

            var day2Split = day2Date.toString().split(' ');
            var joined2 = day2Split[0] + " " + day2Split[1] + " " + day2Split[2];

            var day3Split = day3Date.toString().split(' ');
            var joined3 = day3Split[0] + " " + day3Split[1] + " " + day3Split[2];


            var day2TempLow =  (data.daily.data[1].temperatureLow);
            var day3TempLow =  (data.daily.data[2].temperatureLow);

            var day2TempHigh =  (data.daily.data[1].temperatureHigh);
            var day3TempHigh =  (data.daily.data[2].temperatureHigh);

            var day1Summary = (data.daily.data[0].summary);
            var day2Summary = (data.daily.data[1].summary);
            var day3Summary = (data.daily.data[2].summary);
            console.log(day1Summary);
            console.log(day2Summary);
            console.log(day3Summary);

// <!--/*=========================================Start Of Appending===============================================*/-->
            header2.html(
                "<h3 class='textCenter'>" + data.daily.summary + "</h3>"
            );

            front1.css({
                'background': imgSrcBackground1,
                'background-size' : 'cover'
            });
            front2.css({
                'background': imgSrcBackground2,
                'background-size' : 'cover'
            });

            front3.css({
                'background': imgSrcBackground3,
                'background-size' : 'cover'
            });
            front1.html(
                "<div>" +
                "<h3 class='paddingNone'>" +  "Today: " + joined1 + "</h3>" +
                "<p class='paddingNone'>" + day1Summary + "</p>" +
                "<p class='paddingNone'>" + "Current Temperature of " + parseInt(data.currently.temperature) + "°" + "</p>" +
                "</div>"
            );
            front2.html(
                "<div>" +
                "<h3 class='paddingNone'>" + joined2 + "</h3>" +
                "<p class='paddingNone'>" + day2Summary + "</p>" +
                "</div>"
            );
            front3.html(
                "<div>" +
                "<h3 class='paddingNone'>" + joined3 + "</h3>" +
                "<p class='paddingNone'>" + day3Summary + "</p>" +
                "</div>"
            );
            console.log(data.hourly.summary);
            console.log(imgSrcBackground2);
            console.log(imgSrcBackground3);

            weatherDay1.html("<div class='textCenter'>" +
                '<img src="'+ imgSrc + '" alt="" class ="small"/>' +
                "<h2 class='paddingNone'>" + "High " + parseInt(data.daily.data[0].temperatureHigh) + "°/" + "Low " +parseInt(data.daily.data[0].temperatureLow) + "°" + "</h2>"
                + "</div>");

            weatherDay2.html("<div class='textCenter'>" +
                '<img src="'+ imgSrc + '" alt="" class ="small"/>' +
                "<h2 class='paddingNone'>" + "High " + parseInt(day2TempHigh) + "°/" + "Low " +parseInt(day2TempLow) + "°" + "</h2>"
                + "</div>");


            weatherDay3.html("<div class='textCenter'>" +
                '<img src="'+ imgSrc + '" alt="" class ="small"/>' +
                "<h2 class='paddingNone'>" + "High " + parseInt(day3TempHigh) + "°/" + "Low " +parseInt(day3TempLow) + "°" + "</h2>"

                + "</div>");
            console.log(data);
        });




// <!--/*===========================================Button Search==================================================*/-->


        //     north east positive
        // south west negative


        $('#submit').click(function () {
            var search = $(userSearch).val();

            //Use geocode function to get coordinates based on a physical address then store
            geocode(search, mapboxToken).then(function (result) {
                var long = result[0].toString();
                var lat = result[1].toString();
                $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat + ", " + long)
                    .done(function (data) {

                        var front1 = $('#front1');
                        var front2 = $('#front2');
                        var front3 = $('#front3');
                        var imgSrcBackground1 = "url('" + "img/background-" + data.daily.data[0].icon + '.jpg' + "'" + ")";
                        var imgSrcBackground2 = "url('" + "img/background-" + data.daily.data[1].icon + '.jpg' + "'" + ")";
                        var imgSrcBackground3 = "url('" + "img/background-" + data.daily.data[2].icon + '.jpg' + "'" + ")";


                        var weatherDay1 = $('#weatherDay1');
                        var weatherDay2 = $('#weatherDay2');
                        var weatherDay3 = $('#weatherDay3');
                        var header2 = $('#header2');
                        var imgSrc = "img/" + data.daily.data[0].icon + '.png';


                        var day1Date = new Date(data.currently.time * 1000); //digits missing off of time call to save memory the multiplication here fixes the time
                        var day2Date =  new Date((data.daily.data[1].time) * 1000);
                        var day3Date =  new Date((data.daily.data[2].time) * 1000);

                        var day1Split = day1Date.toString().split(' ');
                        var joined1 = day1Split[0] + " " + day1Split[1] + " " + day1Split[2];

                        var day2Split = day2Date.toString().split(' ');
                        var joined2 = day2Split[0] + " " + day2Split[1] + " " + day2Split[2];

                        var day3Split = day3Date.toString().split(' ');
                        var joined3 = day3Split[0] + " " + day3Split[1] + " " + day3Split[2];


                        var day2TempLow =  (data.daily.data[1].temperatureLow);
                        var day3TempLow =  (data.daily.data[2].temperatureLow);

                        var day2TempHigh =  (data.daily.data[1].temperatureHigh);
                        var day3TempHigh =  (data.daily.data[2].temperatureHigh);

                        var day1Summary = (data.daily.data[0].summary);
                        var day2Summary = (data.daily.data[1].summary);
                        var day3Summary = (data.daily.data[2].summary);

                        header2.html(
                            "<h3 class='textCenter'>" + data.daily.summary + "</h3>"
                        );

                        front1.css({
                            'background': imgSrcBackground1,
                            'background-size' : 'cover'
                        });
                        front2.css({
                            'background': imgSrcBackground2,
                            'background-size' : 'cover'
                        });

                        front3.css({
                            'background': imgSrcBackground3,
                            'background-size' : 'cover'
                        });
                        front1.html(
                            "<div>" +
                            "<h3 class='paddingNone'>" +  "Today: " + joined1 + "</h3>" +
                            "<p class='paddingNone'>" + day1Summary + "</p>" +
                            "<p class='paddingNone'>" + "Current Temperature of " + parseInt(data.currently.temperature) + "°" + "</p>" +
                            "</div>"
                        );
                        front2.html(
                            "<div>" +
                            "<h3 class='paddingNone'>" + joined2 + "</h3>" +
                            "<p class='paddingNone'>" + day2Summary + "</p>" +
                            "</div>"
                        );
                        front3.html(
                            "<div>" +
                            "<h3 class='paddingNone'>" + joined3 + "</h3>" +
                            "<p class='paddingNone'>" + day3Summary + "</p>" +
                            "</div>"
                        );
                        console.log(imgSrcBackground1);
                        console.log(imgSrcBackground2);
                        console.log(imgSrcBackground3);

                        weatherDay1.html("<div class='textCenter'>" +

                            '<img src="'+ imgSrc + '" alt="" class ="small"/>' +
                            "<h2 class='paddingNone'>" + "High " + parseInt(data.daily.data[0].temperatureHigh) + "°/" + "Low " +parseInt(data.daily.data[0].temperatureLow) + "°" + "</h2>"
                            + "</div>");

                        weatherDay2.html("<div class='textCenter'>" +

                            '<img src="'+ imgSrc + '" alt="" class ="small"/>' +
                            "<h2 class='paddingNone'>" + "High " + parseInt(day2TempHigh) + "°/" + "Low " +parseInt(day2TempLow) + "°" + "</h2>"
                            + "</div>");


                        weatherDay3.html("<div class='textCenter'>" +

                            '<img src="'+ imgSrc + '" alt="" class ="small"/>' +
                            "<h2 class='paddingNone'>" + "High " + parseInt(day3TempHigh) + "°/" + "Low " +parseInt(day3TempLow) + "°" + "</h2>"

                            + "</div>");
                        console.log(data);

                        map.flyTo({center:result,zoom:10});


                        var mapCity = geocode(search, mapboxToken);
                        mapCity.then(function(result) {
                            console.log(result);
                            var resultLong = result[0] ;
                            var resultLat = result[1] ;
                            var coordinates = {
                                "lng": resultLong,
                                "lat": resultLat,

                            };
                            marker.setLngLat([coordinates.lng, coordinates.lat]);

                            reverseGeocode(coordinates, mapboxToken).then(function(data) {
                                var resultSplit = data.toString().split(', ');
                                var resultJoin = resultSplit[resultSplit.length-3] + " " + resultSplit[resultSplit.length-2];
                                $('#weatherLocation').html(resultJoin + " " + 'Weather Forecast');
                                console.log(data);

                                console.log(resultSplit);
                            });
                        });

                    });
            })
        });
// <!--/*============================================Start Of Map==================================================*/-->

        mapboxgl.accessToken = mapboxToken;

        var mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            zoom:9,
            pitch: 0,
            center: [-98.4916, 29.4252],
            sprite: "mapbox://sprites/mapbox/bright-v8"
            // interactive: false
        };
        var map = new mapboxgl.Map(mapOptions);
        var markerOptions = {
            color: "black",
            draggable: true
        };
        var marker = new mapboxgl.Marker(markerOptions)
            .setLngLat([-98.4816, 29.4260])
            .addTo(map);
        console.log(marker._lngLat.lng);
        console.log(marker._lngLat.lat);


        function onDragEnd() {
            var lngLat = marker.getLngLat();
            var weather = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + darkSkyKey + "/" + lngLat.lat + "," + lngLat.lng;
            // // Pulling Weather
            $.get(weather).done(function (data) {


                var front1 = $('#front1');
                var front2 = $('#front2');
                var front3 = $('#front3');
                var imgSrcBackground1 = "url('" + "img/background-" + data.daily.data[0].icon + '.jpg' + "'" + ")";
                var imgSrcBackground2 = "url('" + "img/background-" + data.daily.data[1].icon + '.jpg' + "'" + ")";
                var imgSrcBackground3 = "url('" + "img/background-" + data.daily.data[2].icon + '.jpg' + "'" + ")";

                console.log(imgSrcBackground1);
                console.log(imgSrcBackground2);
                console.log(imgSrcBackground3);

                var weatherDay1 = $('#weatherDay1');
                var weatherDay2 = $('#weatherDay2');
                var weatherDay3 = $('#weatherDay3');
                var header2 = $('#header2');
                var imgSrc = "img/" + data.daily.data[0].icon + '.png';


                var day1Date = new Date(data.currently.time * 1000); //digits missing off of time call to save memory the multiplication here fixes the time
                var day2Date =  new Date((data.daily.data[1].time) * 1000);
                var day3Date =  new Date((data.daily.data[2].time) * 1000);

                var day1Split = day1Date.toString().split(' ');
                var joined1 = day1Split[0] + " " + day1Split[1] + " " + day1Split[2];

                var day2Split = day2Date.toString().split(' ');
                var joined2 = day2Split[0] + " " + day2Split[1] + " " + day2Split[2];

                var day3Split = day3Date.toString().split(' ');
                var joined3 = day3Split[0] + " " + day3Split[1] + " " + day3Split[2];


                var day2TempLow =  (data.daily.data[1].temperatureLow);
                var day3TempLow =  (data.daily.data[2].temperatureLow);

                var day2TempHigh =  (data.daily.data[1].temperatureHigh);
                var day3TempHigh =  (data.daily.data[2].temperatureHigh);

                var day1Summary = (data.daily.data[0].summary);
                var day2Summary = (data.daily.data[1].summary);
                var day3Summary = (data.daily.data[2].summary);

                header2.html(
                    "<h3 class='textCenter'>" + data.daily.summary + "</h3>"
                );

                front1.css({
                    'background': imgSrcBackground1,
                    'background-size' : 'cover'
                });
                front2.css({
                    'background': imgSrcBackground2,
                    'background-size' : 'cover'
                });

                front3.css({
                    'background': imgSrcBackground3,
                    'background-size' : 'cover'
                });
                front1.html(
                    "<div>" +
                    "<h3 class='paddingNone'>" +  "Today: " + joined1 + "</h3>" +
                    "<p class='paddingNone'>" + day1Summary + "</p>" +
                    "<p class='paddingNone'>" + "Current Temperature of " + parseInt(data.currently.temperature) + "°" + "</p>" +
                    "</div>"
                );
                front2.html(
                    "<div>" +
                    "<h3 class='paddingNone'>" + joined2 + "</h3>" +
                    "<p class='paddingNone'>" + day2Summary + "</p>" +
                    "</div>"
                );
                front3.html(
                    "<div>" +
                    "<h3 class='paddingNone'>" + joined3 + "</h3>" +
                    "<p class='paddingNone'>" + day3Summary + "</p>" +
                    "</div>"
                );
                console.log(imgSrcBackground1);
                console.log(imgSrcBackground2);
                console.log(imgSrcBackground3);

                weatherDay1.html("<div class='textCenter'>" +

                    '<img src="'+ imgSrc + '" alt="" class ="small"/>' +
                    "<h2 class='paddingNone'>" + "High " + parseInt(data.daily.data[0].temperatureHigh) + "°/" + "Low " +parseInt(data.daily.data[0].temperatureLow) + "°" + "</h2>"

                    + "</div>");

                weatherDay2.html("<div class='textCenter'>" +

                    '<img src="'+ imgSrc + '" alt="" class ="small"/>' +
                    "<h2 class='paddingNone'>" + "High " + parseInt(day2TempHigh) + "°/" + "Low " +parseInt(day2TempLow) + "°" + "</h2>"
                    + "</div>");


                weatherDay3.html("<div class='textCenter'>" +

                    '<img src="'+ imgSrc + '" alt="" class ="small"/>' +
                    "<h2 class='paddingNone'>" + "High " + parseInt(day3TempHigh) + "°/" + "Low " +parseInt(day3TempLow) + "°" + "</h2>"

                    + "</div>");
                console.log(data);


                var mapCity = reverseGeocode(lngLat, mapboxToken);
                console.log(Promise.resolve(mapCity));

                mapCity.then(function(result) {
                    console.log(lngLat);
                    var resultSplit = result.toString().split(', ');
                    var resultJoin = resultSplit[resultSplit.length-3] + " " + resultSplit[resultSplit.length-2];
                    $('#weatherLocation').html(resultJoin + " " + 'Weather Forecast');
                    console.log(result);

                    console.log(resultSplit);
                });

            });
        }

        marker.on('dragend', onDragEnd);
// <!--/*=======================================End of Document Ready==============================================*/-->

    });
})();