/**
 * User: luckystar
 * Date: 14-1-12
 * Time: 下午10:00
 */

angular.module('playCppApp')
    .controller('LearnCtrl', ['$scope','$rootScope', 'Steps', function ($scope,$rootScope, Steps) {
        Steps.get({id: $rootScope.currentStep._id}, function (data) {
            $scope.content = data.content
        })
    }])