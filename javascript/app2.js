(function(){
  var app = angular.module("basehacks", ["firebase"]);

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


  app.controller("MapController", ["$scope", "$firebaseObject", "$window", function($scope, $firebaseObject, $window){
    $scope.$watch("authenticated", function(){
      if ($scope.authenticated){
        // var map;
        // var microsoft = {lat:37.403997, lng:-122.034975};
        // var byeLatlng = {lat:33.812471, lng:-117.91587};
        //
        // function addYourLocationButton(map, marker)
        // {
        // 	var controlDiv = document.createElement('div');
        //
        // 	var firstChild = document.createElement('button');
        // 	firstChild.style.backgroundColor = '#fff';
        // 	firstChild.style.border = 'none';
        // 	firstChild.style.outline = 'none';
        // 	firstChild.style.width = '28px';
        // 	firstChild.style.height = '28px';
        // 	firstChild.style.borderRadius = '2px';
        // 	firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
        // 	firstChild.style.cursor = 'pointer';
        // 	firstChild.style.marginRight = '10px';
        // 	firstChild.style.padding = '0px';
        // 	firstChild.title = 'Your Location';
        // 	controlDiv.appendChild(firstChild);
        //
        // 	var secondChild = document.createElement('div');
        // 	secondChild.style.margin = '5px';
        // 	secondChild.style.width = '18px';
        // 	secondChild.style.height = '18px';
        // 	secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
        // 	secondChild.style.backgroundSize = '180px 18px';
        // 	secondChild.style.backgroundPosition = '0px 0px';
        // 	secondChild.style.backgroundRepeat = 'no-repeat';
        // 	secondChild.id = 'you_location_img';
        // 	firstChild.appendChild(secondChild);
        //
        // 	google.maps.event.addListener(map, 'dragend', function() {
        // 		$('#you_location_img').css('background-position', '0px 0px');
        // 	});
        //
        // 	firstChild.addEventListener('click', function() {
        // 		var imgX = '0';
        // 		var animationInterval = setInterval(function(){
        // 			if(imgX == '-18') imgX = '0';
        // 			else imgX = '-18';
        // 			$('#you_location_img').css('background-position', imgX+'px 0px');
        // 		}, 500);
        // 		if(navigator.geolocation) {
        // 			navigator.geolocation.getCurrentPosition(function(position) {
        // 				var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        //         $scope.myLatitude = position.coords.latitude;
        //         $scope.myLongitude = position.coords.longitude;
        // 				marker.setPosition(latlng);
        // 				map.setCenter(latlng);
        // 				clearInterval(animationInterval);
        // 				$('#you_location_img').css('background-position', '-144px 0px');
        // 			});
        // 		}
        // 		else{
        // 			clearInterval(animationInterval);
        // 			$('#you_location_img').css('background-position', '0px 0px');
        // 		}
        // 	});
        //
        // 	controlDiv.index = 1;
        // 	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
        // }
        //
        // function initMap() {
        //   var noPoi = [
        //     {
        //       featureType: "poi",
        //       stylers: [
        //         { visibility: "off" }
        //       ]
        //     }
        //   ];
        // 	map = new google.maps.Map(document.getElementById('map'), {
        // 		zoom: 15,
        // 		center: microsoft
        // 	});
        //   var marker = new google.maps.Marker({
        //     map: map,
        //     animation: google.maps.Animation.DROP,
        //     position: microsoft
        //   });
          // $scope.markers = [];
          // $scope.ref = firebase.database().ref();
          // $scope.postsRef = $scope.ref.child("posts");
          // $scope.posts = $firebaseObject($scope.postsRef);
          // $scope.posts.$loaded().then(function(data){
          //   angular.forEach(data, function(key, value){
          //     console.log("hi");
          //     var postLatlng = new google.maps.LatLng(value.postLatitude, value.postLongitude);
          //     var marker = new google.maps.Marker({
          //       map: $scope.map,
          //       animation: google.maps.Animation.DROP,
          //       position: postLatlng
          //     });
          //     $scope.markers.push(marker);
          //   });
          // });
          // $scope.map.setOptions({styles: noPoi});
        	// var myMarker = new google.maps.Marker({
        	// 	map: map,
        	// 	animation: google.maps.Animation.DROP,
        	// 	position: microsoft
        	// });
        	// addYourLocationButton(map);
        function initMap() {
          var bye = {lat:33.812471, lng:-117.91587};
          var hi = {lat:37.4040312, lng:-122.03533759999999};
          var hihi = {lat:37.314821, lng:-122.056725};
          var bibi = {lat:37.396680, lng:-122.060196};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: hi
          });

          var contentString = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">DISNEYLAND :)</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Description: </b>DISNEYLAND HAS SO MANY NEW RIDES!!!</p>'+
              '<p><b>Points: </b> 25</p>'+
              '</div>'+
              '<button type="button" class="btn btn-m btn-success">' +
                '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true">' + '</span>' +
              '</button>' +
              '<button type="button" class="btn btn-m btn-danger">' +
                '<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true">' + '</span>' +
              '</button>' +
              '</div>';

          var contentString2 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Selling piano</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Description: </b>Selling my grand piano for 25 dollars! Some assembly required.</p>'+
              '<p><b>Points: </b> 13</p>'+
              '</div>'+
              '<button type="button" class="btn btn-m btn-success">' +
                '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true">' + '</span>' +
              '</button>' +
              '<button type="button" class="btn btn-m btn-danger">' +
                '<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true">' + '</span>' +
              '</button>' +
              '</div>';

          var contentString3 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Robotics</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Description: </b>"Monta Vista High is having a robotics tournament tomorrow"</p>'+
              '<p><b>Points: </b> 8</p>'+
              '</div>'+
              '<button type="button" class="btn btn-m btn-success">' +
                '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true">' + '</span>' +
              '</button>' +
              '<button type="button" class="btn btn-m btn-danger">' +
                '<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true">' + '</span>' +
              '</button>' +
              '</div>';

          var contentString4 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">7-Eleven</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Description: </b>7-Eleven is selling 3 hot dogs for a dollar.</p>'+
              '<p><b>Points: </b> -8</p>'+
              '</div>'+
              '<button type="button" class="btn btn-m btn-success">' +
                '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true">' + '</span>' +
              '</button>' +
              '<button type="button" class="btn btn-m btn-danger">' +
                '<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true">' + '</span>' +
              '</button>' +
              '</div>';

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          var infowindow2 = new google.maps.InfoWindow({
            content: contentString2
          });
          var infowindow3 = new google.maps.InfoWindow({
            content: contentString3
          });
          var infowindow4 = new google.maps.InfoWindow({
            content: contentString4
          });

          var marker = new google.maps.Marker({
            position: bye,
            map: map,
            title: 'DisneyLand'
          });
          var marker2 = new google.maps.Marker({
            position: hi,
            map: map,
            title: 'Piano'
          });
          var marker3 = new google.maps.Marker({
            position: hihi,
            map: map,
            title: 'Robotics'
          });
          var marker4 = new google.maps.Marker({
            position: bibi,
            map: map,
            title: '7-Eleven'
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
          marker2.addListener('click', function() {
            infowindow2.open(map, marker2);
          });
          marker3.addListener('click', function() {
            infowindow3.open(map, marker3);
          });
          marker4.addListener('click', function() {
            infowindow4.open(map, marker4);
          });
        }


        $(document).ready(function(e) {
        	initMap();
        });


      }
    });
  }]);

  app.controller("MarkerController", ["$scope", "$firebaseObject", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray){
    // $scope.$watch("authenticated", function(){
    //   if ($scope.authenticated){
    //     $scope.markers = [];
    //     $scope.ref = firebase.database().ref();
    //     $scope.postsRef = $scope.ref.child("posts");
    //     $scope.posts = $firebaseObject($scope.postsRef);
    //     console.log($scope.posts);
    //     $scope.posts.$loaded().then(function(data){
    //       // for (var i = 0; i < $scope.posts.length; i++){
    //       //   console.log("hi");
    //       //   var postLocation = {lat:$scope.posts[i].postLatitude, lng:$scope.posts[i].postLongitude};
    //       //   var marker = new google.maps.Marker({
    //       //     map: $scope.map,
    //       //     animation: google.maps.Animation.DROP,
    //       //     position: postLocation
    //       //   });
    //       //   $scope.markers.push(marker);
    //       // }
    //       angular.forEach(data, function(key, value){
    //         var postLatlng = new google.maps.LatLng(value.postLatitude, value.postLongitude);
    //         var marker = new google.maps.Marker({
    //           map: $scope.map,
    //           animation: google.maps.Animation.DROP,
    //           position: postLatlng
    //         });
    //         $scope.markers.push(marker);
    //       });
    //     });
    //   }
    // });
  }]);

  app.controller("ModalController", ["$scope", "$firebaseObject", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray){
    // $scope.post = function(){
    //   var postTitle = document.getElementById('postTitle').value;
    //   var postDescription = document.getElementById('postDescription').value;
    //   console.log(postTitle);
    //   $scope.postRef = $scope.postsRef.child("" + postTitle);
    //   $scope.postRef.update({
    //     postTitle : postTitle,
    //     postDescription : postDescription,
    //     postLatitude : $scope.myLatitude,
    //     postLongitude : $scope.myLongitude,
    //     postAuthor : $scope.email
    //   });
    //   var postLocation = {lat:$scope.myLatitude, lng:$scope.myLongitude};
    //   var marker = new google.maps.Marker({
    //     map: map,
    //     animation: google.maps.Animation.DROP,
    //     position: postLocation
    //   });
    //   $scope.markers.push(marker);
    // };
  }]);

})();
