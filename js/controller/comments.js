app.controller('CommentsCtrl', function ($scope, $rootScope, Post, $routeParams, $filter) {
    $rootScope.loading = true;
    $scope.newComment = {};
    $scope.chiffre = $filter('round')(2.879456123, 2);
    $scope.search = {};
    Post.get($routeParams.id).then(function (post) {
        $rootScope.loading = false;
        $scope.title = post.name;
        $scope.comments = post.comments;
    }, function (msg) {
        alert(msg);
    });
    $scope.addComment = function () {
        $scope.comments.push($scope.newComment);
        Post.add($scope.newComment).then(function () {
        }, function () {
            alert('Votre message n\'a pas pu être sauvegardé');
        });
        $scope.newComment = {};
    };
});

app.filter('round', function () {
    return function (input, precision) {
        chiffre = Math.round(input * Math.pow(10, precision)) / Math.pow(10, precision);
        return chiffre.toString().replace('.', ',') ;
    };
});
