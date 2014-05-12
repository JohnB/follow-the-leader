Locations = new Meteor.Collection("locations");

Locations.allow({
  insert: function locationInsert() {
    return true;
  },
  update: function locationInsert() {
    return true;
  }
})
