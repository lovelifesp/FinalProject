var app = angular.module("shopMod");

app.controller("landingCtrl", function($scope, $http){

  // var map;
  // var infowindow;






    function initMap() {
      var detroit = {lat:  42.331429, lng: -83.045753};


      var service = new google.maps.places.PlacesService(map);

      service.nearbySearch({
        location: detroit,
        radius: 500,
        type: ['clothing_store']
      },function callback(results, status) {
        $scope.$apply(function(){

          // Code to handle result from API goes here.
          // results is the array of stores

          // $scope.randomStore= $scope.storeInfo(Math.random() * $scope.results);
          $scope.storeInfo = results;

          $scope.randomStore= $scope.storeInfo[Math.floor(Math.random() * $scope.storeInfo.length)];




          // console.log("results", results);
          console.log("randomStore", $scope.randomStore);


          // Code to handle results from API ends here.
        });





      });


    }


      initMap();

    });
