
Template.lead.helpers({
    locationary: function() {
        return {
            session_key: "locationary",
            latitude: function() {
                var pos = Session.get(this.session_key);
                if (pos == undefined) {
                    return 51.4791;   //   http://en.wikipedia.org/wiki/Greenwich (aka UTC or ZULU)
                }
                return pos[0];
            },
            longitude: function() {
                var pos = Session.get(this.session_key);
                if (pos == undefined) {
                    return 0.0;       //   http://en.wikipedia.org/wiki/Greenwich (aka UTC or ZULU)
                }
                return pos[1];
            },
            locationRequestAllowed: function() {
                return (Session.get(this.session_key) != undefined);
            }
        };
    },
    followURL: function() {
      var locationId = Session.get('locationid');
      if (locationId) {
          return Meteor.absoluteUrl('follow/' + locationId)
      }
    }
});

Template.lead.events({
    'click .getlocation': function() {
        if (navigator.geolocation)
        {
            var oneHour = 3600; //seconds
            var lat = 51.508742;
            var lng = -0.120850;
            var center = new google.maps.LatLng(lat,lng);
            var locationId = Locations.insert({lat: lat, lng: lng, expireAfterSeconds: oneHour });
            Session.set('locationid', locationId);
            var location = Locations.findOne({_id: locationId});
            var map = new google.maps.Map(document.getElementById("googleMap"),{
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            var marker = undefined;
            navigator.geolocation.watchPosition(function (pos) {
                Session.set('locationary', [pos.coords.latitude, pos.coords.longitude] );
                Locations.update({_id: locationId}, {$set: {
                  lat: pos.coords.latitude, lng: pos.coords.longitude
                }});
                center = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                map.setCenter(center);
                marker = new google.maps.Marker({
                    position: center,
                    map: map
                });
            });
        }
        else
        {
            x.innerHTML="Geolocation is not supported by this browser.";
        }
    }
});
