type='text/javascript'

      var map, searchManager;

      function GetMap() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (position) {
                  var loc = new Microsoft.Maps.Location(
                      position.coords.latitude,
                      position.coords.longitude);

                  map = new Microsoft.Maps.Map('#myMap', {
                      credentials: 'Akm81N0pkFUXJiWLa3fuIPUFwpK1jRerPt0hoDmXje9nv9YgAWT-9Tq3PJKaROoH',
                      center: loc,
                      zoom: 11
                  });

                  // Add a pushpin to the map at the current location.
                  var pin = new Microsoft.Maps.Pushpin(loc);
                  map.entities.push(pin);

                  // Make a request to reverse geocode the current location.
                  reverseGeocode(loc);
              });
          } else {
              alert("Geolocation is not supported by this browser.");
          }
      }

      function reverseGeocode(location) {
          // If search manager is not defined, load the search module.
          if (!searchManager) {
              // Create an instance of the search manager and call the reverseGeocode function again.
              Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
                  searchManager = new Microsoft.Maps.Search.SearchManager(map);
                  reverseGeocode(location);
              });
          } else {
              var searchRequest = {
                  location: location,
                  callback: function (r) {
                      // Display the name of the result on the page.
                      document.getElementById("address").value = r.name;
                  },
                  errorCallback: function (e) {
                      // If there is an error, alert the user about it.
                      alert("Unable to reverse geocode location.");
                  }
              };

              // Make the reverse geocode request.
              searchManager.reverseGeocode(searchRequest);
          }
      }
  
  document.querySelector("#find-me").addEventListener("click", GetMap);