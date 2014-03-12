Template.lead.helpers({
    lat_and_lon: function() {
        var pos = Session.get('locationary.id');
        var result = 'unknown';
        if( pos == undefined ) {
            pos = [51.505, -0.09];  // London, per http://leafletjs.com/examples/quick-start.html
        }
        result = 'lat=' + pos[0] + '\&lon=' + pos[1];
        console.log(result);
        return result;
    }
});

Template.lead.events({
    'click .getlocation': function() {
        if (navigator.geolocation)
        {
            navigator.geolocation.watchPosition(function (pos) {
                Session.set('locationary.id', [pos.coords.latitude, pos.coords.longitude] );
            });
        }
        else
        {
            x.innerHTML="Geolocation is not supported by this browser.";
        }
    }
});
