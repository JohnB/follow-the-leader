
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
                    return 0.0;   //   http://en.wikipedia.org/wiki/Greenwich (aka UTC or ZULU)
                }
                return pos[1];
            },
            locationRequestAllowed: function() {
                return (Session.get(this.session_key) != undefined);
            }
        };
    }
});

Template.lead.events({
    'click .getlocation': function() {
        if (navigator.geolocation)
        {
            navigator.geolocation.watchPosition(function (pos) {
                Session.set('locationary', [pos.coords.latitude, pos.coords.longitude] );
            });
        }
        else
        {
            x.innerHTML="Geolocation is not supported by this browser.";
        }
    }
});
