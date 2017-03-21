var app = angular.module("shopMod");

app.controller("landingCtrl", function($scope, $http){

  // var map;
  // var infowindow;


  function initMap() {
    var detroit = {lat:  42.331429, lng: -83.045753};

    map = new google.maps.Map(document.getElementById('map'), {
      center: detroit,
      zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: detroit,
      radius: 500,
      type: ['clothing_store']
    }, function callback(results, status) {
      $scope.$apply(function(){
        $scope.storeInfo = results;
      });
      console.log(results);
    });
  }




  initMap();

});
