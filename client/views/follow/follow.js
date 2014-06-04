

Deps.autorun(function () {
  Meteor.subscribe("locationObject", function () {
    console.log("locationObject ");
    var locationId = this.params.locationid;
    var location = Locations.findOne({_id: locationId});
    if (location) {
      var lat = location.lat;
      var lng = location.lng;
      Session.set('mapCenter', [lat, lng] );
    }
  });
});

// Template.follow.rendered = function() {
//   self.handle = Deps.autorun(function mapAutofollow() {
//     Meteor.subscribe("locationObject", function () {
//       console.log("locationObject ");
//     });
//     var self = this;
//     var locationId = this.params.locationid;
//     if (locationId) {
//       var location = Locations.findOne({_id: locationId});
//       var lat = location.lat;
//       var lng = location.lng;
//       Session.set('mapCenter', [lat, lng] );
//     }
//   });
// };

Template.follow.helpers({
    asdf: function() {
      return "crap";
    },
    updateMap: function() {  // yucky name and yucky architecture
      Meteor.subscribe("locationObject", function () {
        console.log("locationObject ");
      });
      var self = this;
      var locationId = this.params.locationid;
      if (locationId) {
        var location = Locations.findOne({_id: locationId});
        var lat = location.lat;
        var lng = location.lng;
        var center = new google.maps.LatLng(lat,lng);
        Session.set('locationid', locationId);
        var map = new google.maps.Map(document.getElementById("googleMap"),{
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var marker = undefined;
      }
    }
});
