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
         console.log($scope.storeInfo);
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
       console.log(results);
     });




   }


     initMap();

   });

     //
    //  var request = {
    //    location: detroit,
    //    radius: '300',
    //    query: 'searchParams'
    //  };





    //  service = new google.maps.places.PlacesService(map);
    //  service.textSearch(request, callback);
    //  }





    //  function callback(results, status) {
    //    if (status == google.maps.places.PlacesServiceStatus.OK) {
    //      for (var i = 0; i < results.length; i++) {
    //        var place = results[i];
    //       //  createMarker(results[i]);
    //      }
    //    }






  //  })








// var map;
// var service;
// var infowindow;
//
// function initialize() {
//   var detroit = new google.maps.LatLng( 42.331429,-83.045753);
//
//   map = new google.maps.Map(document.getElementById('map'), {
//       center: detroit,
//       zoom: 15
//     });
//
//
//
// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }
