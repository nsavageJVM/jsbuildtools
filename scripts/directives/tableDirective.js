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