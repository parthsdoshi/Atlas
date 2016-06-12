(function(){
  var app = angular.module("listView", ["firebase"]);

  app.config(function() {
    var config = {
      apiKey: "AIzaSyA3_gED2MawMfwPlSN4CCNS032eTdXmtao",
      authDomain: "project-5737053587009917687.firebaseapp.com",
      databaseURL: "https://project-5737053587009917687.firebaseio.com",
      storageBucket: "project-5737053587009917687.appspot.com",
    };
    firebase.initializeApp(config);
  });

  app.controller("AuthenticationController", ["$scope", "$firebaseAuth", "$firebaseObject", "$window", function($scope, $firebaseAuth, $firebaseObject, $window){
    $scope.authenticated = false;

    $scope.auth = $firebaseAuth();
    this.init = function(){
      $scope.auth.$onAuthStateChanged(
        function(user) {
          if (user) {
            getLocation();
            function getLocation(){
              if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function(position){
                    $scope.myLatitude = position.coords.latitude;
                    $scope.myLongitude = position.coords.longitude;
                    $scope.myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    console.log(position);
                  });
              } else {
                  console.log("geolocation not supported");
              }
            }
            $scope.email = user.email;
            $scope.authenticated = true;
          } else {
            $scope.authenticated = false;
            $window.location.replace("signInPage.html");
          }
        }
      );
    }

    this.logout = function(){
      $scope.auth.$signOut();
    }
  }]);

  app.controller("TableController", ["$scope", "$firebaseObject", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray){
    $scope.$watch("authenticated", function(){
      if ($scope.authenticated){
        var ref = firebase.database().ref();
        var postsRef = ref.child("posts");
        $scope.posts = $firebaseObject(postsRef);
        // $scope.$watch("myLatlng", function(){
          $scope.posts.$loaded().then(function(){
            console.log($scope.posts.length);
            for (var i = 0; i < $scope.posts.length; i++){
              $scope.posts[i].distance = google.maps.geometry.computeDistanceBetween($scope.myLatlng, new google.maps.LatLng(posts[i].postLatitude, posts[i].postLongitude));
              console.log(google.maps.geometry.spherical.computeDistanceBetween($scope.myLatlng, new google.maps.LatLng(posts[i].postLatitude, posts[i].postLongitude)));
            }
          });
        // });
      }
    });
  }]);

})();
