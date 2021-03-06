var UsersController = RouteController.extend({
    template: 'follow'
});

Router.map(function () {
    this.route('follow', {
        path :  '/follow/:locationID',
        controller :  UsersController,
        waitOn: function() {
          console.log('Waiting on ' + this.params.locationID);
          var loc = Meteor.subscribe('locationObject', this.params.locationID);
          console.log('Finished waiting for '+loc);
          console.log('lat: ' + loc.lat);
          return loc;
        },
        data: function () {
          console.log('Finding ' + this.params.locationID);
          var loc = Locations.findOne({_id: this.params.locationID});
          console.log('Found '+loc);
          console.log('lat '+loc.lat);
          Session.set('mapCenter', [loc.lat, loc.lng] );
          return loc;
        }
    });
});
