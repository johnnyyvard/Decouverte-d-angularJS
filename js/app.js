var app = angular.module('MonApp', ['ngResource'] );

app.controller('PostsCtrl', function($scope, $resource){

    var Post = $resource('/posts/:id.json');
    posts = Post.query();

});