// Get User's Coordinate from their Browser
var x = document.getElementById('searchResults');

var pilotLatitude;
var pilotLongitude;

//To initialize the current latitude and longitude 
function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(pilotLatitude,pilotLongitude),
        zoom:5,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("map"), mapProp);
    
    var infoWindow = new google.maps.InfoWindow({map: map});
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('You are here.');
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    }
    else {
      // when browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
}
//The function below is used for handling the error case, when location is not enabled. 
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
}

google.maps.event.addDomListener(window, 'load', initialize);

//As soon as the page is loaded the current latitude and longitude is retrived using the location services.
window.onload = function () {           
        if ( navigator.geolocation )
        {
            navigator.geolocation.getCurrentPosition( showPosition );
        }
        // Default to Washington, DC
        else {
            x.innerHTML="Geolocation is not supported by this browser";
            //write default coordinates later
            console.log("Geolocation is not supported by this browser");
        }
   
}

//When the page is loaded, both the current latitude and longitude are displayed.
function showPosition(position) {
    pilotLatitude = position.coords.latitude;
    pilotLongitude= position.coords.longitude;	
	
    x.innerHTML = "Pilot's Latitude: " + pilotLatitude + 
    "<br>Pilot's Longitude: " + pilotLongitude;    
    //NearestCity(pilotLatitude,pilotLongitude);    
}

// Convert Degress to Radians
function Deg2Rad( deg ) {
   return deg * Math.PI / 180;
}

//On load of the page, the current location is displayed using below function.
function PythagorasEquirectangular( lat1, lon1, lat2, lon2 )
{
    lat1 = Deg2Rad(lat1);
    lat2 = Deg2Rad(lat2);
    lon1 = Deg2Rad(lon1);
    lon2 = Deg2Rad(lon2);
    var R = 6371; // km
    var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
    var y = (lat2-lat1);
    var d = Math.sqrt(x*x + y*y) * R;
    return d;
}
//Using the search button, we get the name of closest airport 
$("#search").click(function(){
    console.log("search button clicked");
     $.getJSON("airports.json", function(data){       
        var output = '<ul class="searchlist">';
        var mindif=99999;
        var closest;
        $.each(data, function(key, val){
            //calculating distance between pilot and airport
            var dif =  PythagorasEquirectangular( pilotLatitude, pilotLongitude, val.lat, val.lon );
            if ( dif < mindif )
            {
                closest=val.name;
                mindif = dif;
            }            
            
        });
        x.innerHTML += "<br>Closest Airport : "+closest;
    });
});
