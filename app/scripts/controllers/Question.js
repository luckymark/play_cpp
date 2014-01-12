'use strict';

angular.module('playCppApp')
    .controller('QuestionCtrl', ['$scope', 'Question', function ($scope, Question) {
        var questions=[]
            , index = 0;
        Question.query(function (data) {
            questions = data
            $scope.question = questions[index]
        })

        $scope.pre = function () {
            $scope.question = questions[--index]
        }
        $scope.next = function () {
            $scope.question = questions[++index]
        }

        $scope.isFirst = function () {
            return questions.length==0 || index == 0
        }
        $scope.isLast = function () {
            return questions.length==0 || (index == (questions.length - 1))
        }

        $scope.select =function(answer){
            alert(answer)
        }

    }])
