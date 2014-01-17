'use strict';

angular.module('playCppApp')
    .controller('MainCtrl', ['$scope', '$state',  function ($scope,  $state) {
        $scope.isState = function (state) {
            return $state.is(state)
        }
    }])
