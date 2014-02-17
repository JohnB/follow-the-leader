var LeadController = RouteController.extend({
    template: 'lead'
});

Router.map(function () {
    this.route('lead', {
        path :  '/lead',
        controller :  LeadController
    });
});

