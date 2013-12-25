'use strict';

angular.module('playCppApp')
    .controller('LoginCtrl', ['$scope', '$modalInstance', '$http', '$cookies', function ($scope, $modalInstance, $http, $cookies) {

        $scope.user = {
            name: "",
            password: ""
        }

        $scope.ok = function () {
            $http.post('/userlogin', $scope.user)
                .success(function (data, status) {
                    if (data && typeof data === "object") {
                        $cookies.username = data.name
                        $cookies.userid = data._id
                        $modalInstance.close()
                    } else {
                        alert('login failed!')
                    }
                })
                .error(function (data, status) {
                    alert('login failed!')
                    console.log(data)
                })
        }

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel')
        }
    }])