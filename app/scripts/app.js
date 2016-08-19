'use strict';

angular.module('playCppApp', [
        'ngResource',
        'ui.bootstrap',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/")

        $stateProvider
            .state('logoff', {
                url: "/login",
                templateUrl: "/login",
                controller: 'LoginCtrl'
            })
            .state('steps', {
                url: "/",
                templateUrl: "/steps",
                controller: 'StepsCtrl'
            })
            .state('learning', {
                url: "/learn",
                templateUrl: "/learn",
                controller: 'LearnCtrl'
            })
            .state('testing', {
                url: "/test",
                templateUrl: "/question",
                controller: 'QuestionCtrl'
            })
    })

