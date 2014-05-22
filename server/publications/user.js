Meteor.publish('locationObject', function (_id) {
    return Locations.find({_id: _id});
});
