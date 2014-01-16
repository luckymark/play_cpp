/**
 * User: luckystar
 * Date: 14-1-12
 * Time: 下午12:24
 */

angular.module('playCppApp')
    .controller('StepsCtrl', ['$scope', '$rootScope', 'Steps', '$state', function ($scope, $rootScope, Steps, $state) {
        Steps.query(function (data) {
            $rootScope.steps = data
            $rootScope.currentStep = data[0]
        })

        $scope.select = function (stepIndex) {
            $rootScope.currentStep = $rootScope.steps[stepIndex]

            $state.go('learning')
        }

    }])