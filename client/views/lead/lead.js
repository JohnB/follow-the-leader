Template['lead'].helpers({
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
