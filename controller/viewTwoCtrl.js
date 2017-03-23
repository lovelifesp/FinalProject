var app = angular.module("shopMod");

app.controller("viewTwoCtrl", function($scope, $http){

  // var map;
 //   // var infowindow;
 //

 $scope.userSearch = function(searchParams){
   console.log(searchParams);
   initMap(searchParams);
 }

   function initMap(searchParams) {
     var detroit = {lat:  42.331429, lng: -83.045753};

     // map = new google.maps.Map(document.getElementById('map'), {
     //   center: pyrmont,
     //   zoom: 15
     // });

     //infowindow = new google.maps.InfoWindow();


     var service = new google.maps.places.PlacesService(map);
      service.textSearch({
       location:detroit,
       radius:500,
       type:['clothing_store'],
       query:searchParams
     },function callback(results, status){
        $scope.$apply(function(){
         $scope.storeInfo = results;
         console.log("textSearch results:", $scope.storeInfo);
       })
     });

     service.nearbySearch({
       location: detroit,
       radius: 500,
       type: ['clothing_store']
     },function callback(results, status) {
       $scope.$apply(function(){
         $scope.storeInfo = results;
       });
       console.log("nearbySearch results:", results);
     });




   }


     initMap();

   });





  //  $('.carousel').carousel("cycle")
