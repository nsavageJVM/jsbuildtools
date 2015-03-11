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
/*
 http://stackoverflow.com/questions/12518259/using-ng-repeat-with-table-rows

 */

app.controller('TableController', function($scope, $location, $http) {

    console.log('TableController is go');

    $scope.monthDays = monthDays;
});

/*
 *  http://stackoverflow.com/questions/26005687/uploading-downloading-byte-arrays-with-angularjs-and-asp-net-web-api
 */

app.factory('TableSerDeFactory', function TableSerDeFactory($http, $q) {
    'use strict';
    return {
        tableData: getTableData
    };

    function getTableData() {

     // will do the bit magic here Ian to provide
    }

});
app.directive('datetable', function() {
    // Requires that scope contains a 'monthDays' array.
    // Adds 'weeks' to scope.
    return {
        restrict: 'E',
        replace: true,
        template: '<table cellspacing="0" cellpadding="0" class="table table-bordered table-actions">'
        + '<colgroup span="7"></colgroup>'
        + ' <thead>'
        + '<tr class="days">'
        + '<th scope="col" title="Monday">Mon</th>'
        + '<th scope="col" title="Tuesday">Tue</th>'
        + '<th scope="col" title="Wednesday">Wed</th>'
        + '<th scope="col" title="Thursday">Thu</th>'
        + '<th scope="col" title="Friday">Fri</th>'
        + '<th scope="col" title="Saturday">Sat</th>'
        + '<th scope="col" title="Sunday">Sun</th>'
        + '</tr>'
        + '</thead>'
        + '</tbody>'
        + '<tr ng-repeat="week in weeks">'
        + '<td ng-repeat="booking in week" ng-class="{booked: booking.booked}">{{booking.day}}</td>'
        + '</tr></tbody></table>',
        link: function(scope) {
            scope.weeks = [];
            for (var i = 0; i < scope.monthDays.length; i++) {
                if (i % 7 == 0) {
                    scope.weeks.push([]);
                }
                scope.weeks[scope.weeks.length-1].push(scope.monthDays[i]);
            }
        }
    }
})

var monthDays = [{day:"booked",  booked:true}, {day:"vacant",  booked:false}, {day:"vacant",  booked:false},
    {day:"booked",  booked:true}, {day:"vacant",  booked:false}, {day:"vacant",  booked:false}, {day:"vacant",  booked:false},
    {day:"booked",  booked:true} , {day:"vacant",  booked:false}, {day:"vacant",  booked:false}, {day:"vacant",  booked:false},
    {day:"booked",  booked:true}, {day:"vacant",  booked:false}, {day:"vacant",  booked:false}];