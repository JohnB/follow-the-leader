Template.lead.helpers({
    lat_and_lon: function() {
        var pos = Session.get('location');
        return 'lat=' + pos[0] + '\&lon=' + pos[1];
    }
});

Template['lead'].events({
    'click .getlocation': function() {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(showPosition);
            // TODO: figure out how to display the lat/lon
        }
        else
        {
            x.innerHTML="Geolocation is not supported by this browser.";
        }
    }
});
