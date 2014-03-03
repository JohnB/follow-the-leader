//Meteor.subscribe('users');

function showPosition(pos)
{
    Session.set('location', [pos.coords.latitude, pos.coords.longitude] );
}

navigator.geolocation.watchPosition(showPosition);
