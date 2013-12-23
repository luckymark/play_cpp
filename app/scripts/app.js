'use strict';

angular.module('playCppApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/question.html',
                controller: 'QuestionCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
