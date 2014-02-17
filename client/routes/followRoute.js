var FollowController = RouteController.extend({
    template: 'follow'
});

Router.map(function () {
    this.route('follow', {
        path :  '/follow',
        controller :  FollowController
    });
});

