app.directive('ngComment', function () {
    return {
        scope: {
            comment: '='
        },
        restrict: 'E',
        templateUrl: 'partials/_comment.html'
    }
});

app.directive('ngTest', function(){
    return{
        template : '<div>Salut<strong>{{username}}{{comments}}</strong><div ng-transclude></div></div>',
        restrict : 'A',
        transclude : true,
        scope : {
            comments : '@username',
            username : '='
        }
    }
})