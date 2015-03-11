/*#######################################################################


 Normally like to break AngularJS apps into the following folder structure
 at a minimum:

 /scripts
 /controllers
 /services
 /partials


 #######################################################################*/

var app = angular.module('viewApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngTouch'

]);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/',
        {
            redirectTo: '/table'
        })
        .when('/table',
        {
            controller: 'TableController',
            templateUrl: 'partials/table.html'
        })

        .otherwise({ redirectTo: '/table' });
});