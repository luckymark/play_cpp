'use strict';

angular.module('playCppApp')
    .controller('QuestionCtrl', ['$scope', '$rootScope', 'Question', function ($scope, $rootScope, Question) {
        function load() {
            Question.get({"id": $rootScope.currentStep.questions[$rootScope.currentQuestionIndex]},
                function (data) {
                    $scope.question = data
                }
            )
        }

        load()

        $scope.pre = function () {
            $rootScope.currentQuestionIndex--
            load()
        }
        $scope.next = function () {
            $rootScope.currentQuestionIndex++
            load()
        }

        $scope.isFirst = function () {
            return $rootScope.currentStep.questions.length == 0 || $rootScope.currentQuestionIndex == 0
        }
        $scope.isLast = function () {
            var length = $rootScope.currentStep.questions.length
            return length == 0 || ($rootScope.currentQuestionIndex == (length - 1))
        }

        $scope.select = function (answer) {
            if (answer == $scope.question.answer) {
                alert("Congratulations!")
                if (!$scope.isLast())$scope.next()
            } else {
                alert("Sorry!")
            }
        }

    }])
