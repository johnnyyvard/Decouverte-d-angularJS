app.directive('ngComment', function () {
    return {
        scope: {
            comment: '='
        },
        restrict: 'E',
        templateUrl: 'partials/_comment.html'
    }
})

app.directive('time', function () {
    return {
        restrict: 'E',
        template: '{{time}}',
        scope: {},
    }
})