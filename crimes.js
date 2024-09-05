// set Leaflet map to the coordinates of Philadelphia
var map = L.map('map').setView([39.9897471840457, -75.13893127441406], 11);

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// use JQuery to read the GeoJSON
$.getJSON('crimes_by_district.geojson',
    function(geojson)
    {
        console.log(geojson);

        var choroplethLayer = L.choropleth(geojson, {
            valueProperty: 'incidents',
            scale: ['orange', 'red'],
            steps: 5,
            mode: 'q',
            style: {
            color: '#fff',
            weight: 2,
            fillOpacity: 0.8
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup('District ' + feature.properties.dist_num + '<br>' + feature.properties.incidents.toLocaleString() + ' incidents')
              }
        }).addTo(map);

        // add the legend using DOM (document actual mapper) utility
        var legend = L.control({position: 'bottomright'});

        // use the .onAdd property to add the legend criteria to the map
        legend.onAdd = function(map) {
            // create a div dynamically in the map
            var div = L.DomUtil.create('div', 'info legend');
            // use the incidents value property from the choropleth layer variable
            // to get the max and min value and store in a variable named limits
            var limits = choroplethLayer.options.limits;
            // use the colors from the scale from the choropleth layer to get
            // the first and the last color, where first color corresponds to the lowest value
            // and the last corresponds to the max value
            var colors = choroplethLayer.options.colors;

            // make an empty array for the labels
            var labels = [];

            // use the .innerHTML property to add the content for the div
            div.innerHTML = '<center># of incidents</center><div class="labels"><div class="min">' +
                                limits[0] + '</div><div class="max">' + limits[limits.length-1] +
                                '</div></div>';

            // use .forEach() function to process the colors and display them in the div
            limits.forEach(
                function(limit, index)
                {
                    // add each block of color to the array of labels
                    // each block of color is and li(list) that will go into the ul(undordered lists)
                    labels.push('<li style="background-color: '+ colors[index] +'"></li>');
                }
            );

            // use .innerHTML to add the modified ul content for the div
            div.innerHTML += '<ul>' + labels.join('') + '</ul>'



            // allow for the div to be added to the map
            return div;
        };

        legend.addTo(map);
    }
); 
