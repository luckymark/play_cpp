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
                templateUrl: "views/login.html",
                controller: 'LoginCtrl'
            })
            .state('steps', {
                url: "/",
                templateUrl: "views/steps.html",
                controller: 'StepsCtrl'
            })
            .state('learning', {
                url: "/learn",
                templateUrl: "views/learn.html",
                controller: 'LearnCtrl'
            })
            .state('testing', {
                url: "/test",
                templateUrl: "views/question.html",
                controller: 'QuestionCtrl'
            })
    })

