Template.lead.helpers({
    lat_and_lon: function() {
        var pos = Session.get('location');
        var result = 'lat=' + pos[0] + '\&lon=' + pos[1];
        console.log(result);
        return result;
    }
});

Template.lead.events({
    'click .getlocation': function() {
        alert('asking for location');
        if (navigator.geolocation)
        {
            alert('got location');
            navigator.geolocation.watchPosition(function (pos) {
                Session.set('location', [pos.coords.latitude, pos.coords.longitude] );
            });
        }
        else
        {
            x.innerHTML="Geolocation is not supported by this browser.";
        }
    }
});
