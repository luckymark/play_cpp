'use strict';

angular.module('playCppApp')
    .controller('MainCtrl', ['$scope', '$modal',function ($scope, $modal) {
        $scope.login = function () {
            $modal.open({
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
        }
    }])
