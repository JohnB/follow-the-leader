
Template.lead.helpers({
  locationRequestAllowed: function() {
    return (Session.get('mapCenter') != undefined);
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
      var oneHour = 3600; // 60seconds * 60minutes
      var lat = 51.508742;
      var lng = -0.120850;
      var locationId = Locations.insert({lat: lat, lng: lng, expireAfterSeconds: oneHour });
      Session.set('locationid', locationId);
      var updatePosition = function(lat1, lng1) {
        Session.set('locationary', [lat1, lng1] );
        Session.set('mapCenter', [lat1, lng1]);
        var locationId = Session.get('locationid');
        Locations.update({_id: locationId}, {$set: {
          lat: lat1, lng: lng1
        }});
      };
      updatePosition(lat, lng);
      navigator.geolocation.getCurrentPosition(function initialPosition(pos) {
        updatePosition( pos.coords.latitude, pos.coords.longitude );
      });
      navigator.geolocation.watchPosition(function watchedPosition(pos) {
        updatePosition( pos.coords.latitude, pos.coords.longitude );
      });
    }
    else
    {
        x.innerHTML="Geolocation is not supported by this browser.";
    }
  }
});
