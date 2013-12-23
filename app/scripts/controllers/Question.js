'use strict';

angular.module('playCppApp')
    .controller('QuestionCtrl', ['$scope', 'Question', function ($scope, Question) {
        $scope.question = Question.get({id: '52b710f8d3016112a165cf34'})
    }])
