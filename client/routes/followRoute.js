var UsersController = RouteController.extend({
    template: 'usersList'
});

Router.map(function () {
    this.route('usersList', {
        path :  '/follow',
        controller :  UsersController
    });
});

