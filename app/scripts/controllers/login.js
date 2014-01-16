'use strict';

angular.module('playCppApp')
    .controller('LoginCtrl', ['$scope', '$http',  function ($scope,  $http) {

        $scope.user = {
            name: "",
            password: ""
        }

        $scope.ok = function () {
            $http.post('/rest/some', $scope.user)
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
    }])