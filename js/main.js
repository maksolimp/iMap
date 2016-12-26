;(function() {
	"use strict";

	window.onload = function(){

        var mapDiv = document.querySelector('.ba-map');

        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;

        var chinaMap = new google.maps.Map(mapDiv, {
        	zoom: 4,
          	center: {lat: 31.230416, lng: 121.473701}
        });

        directionsDisplay.setMap(chinaMap);

        var onClickHandler = function() {
            calculateAndDisplayRoute(directionsService, directionsDisplay);
        };

        document.querySelector('.ba-go').addEventListener('click', onClickHandler);

        function calculateAndDisplayRoute(directionsService, directionsDisplay) {
                  directionsService.route({
                  origin: document.querySelector('.ba-start').value,
                  destination: document.querySelector('.ba-end').value,
                  travelMode: google.maps.TravelMode.DRIVING
                }, function(response, status) {
                  if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                  } else {
                    window.alert('Directions request failed due to ' + status);
                  }
                });
              }

      }

})();

