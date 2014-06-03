
Template.googleMap.rendered = function () {
  var self = this;

  if (! self.handle) {
    self.handle = Deps.autorun(function mapAutorun() {
      self.googlemap = document.getElementById("googleMap");
      self.map = new google.maps.Map(self.googlemap,{
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      if (self.googlemap != null) {
        self.mapCenter = Session.get('mapCenter') || [32, -122];
        var center = new google.maps.LatLng(self.mapCenter[0], self.mapCenter[1]);
        self.map.setCenter(center);
      }
    });
  }
};
