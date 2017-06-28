'use strict';

/**
 * @ngdoc directive
 * @name projectMapsClearApp.directive:map
 * @description
 * # map
 */
var module = angular.module('projectMapsClearApp');
module.directive('map', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    replace: true,
    link: function (scope, element, attrs) {
      console.log(element);

      var myOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 6,
        disableDefaultUI: true,
        draggable: false,
        streetViewControl: false,
        scrollwheel: false,
        // The latitude and longitude to center the map (always required)

        // POSITION 1
        center: new google.maps.LatLng(48.858278, 2.294254), // EDIT THIS PART

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "on"
          }, {
            "hue": "#ffffff"
          }, {
            "saturation": -100
          }, {
            "lightness": 100
          }]
        }, {
          "featureType": "water",
          "stylers": [{
            "visibility": "on"
          }, {
            "lightness": -35
          }, {
            "saturation": -100
          }]
        }, {
          "featureType": "administrative.province",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "on"
          }]
        }, {
          "featureType": "administrative.country",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "visibility": "on"
          }, {
            "color": "#000000"
          }, {
            "lightness": 90
          }]
        }]
      };
      var map = new google.maps.Map(document.getElementById(attrs.id), myOptions);

      var circle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#000000',
        fillOpacity: 1.0,
        scale: 12,
        strokeColor: '#000000',
        strokeOpacity: 1.0,
        strokeWeight: 1
      };
      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({

        // POSITION 1-1
        position: new google.maps.LatLng(48.858278, 2.294254),

        map: map,
        // icon: image,
        icon: circle,
        title: 'ex-nihilo'
      });

    }
  };
});


function MapCtrl($scope) {
  $scope.mapPin = 'No pin set yet';
}