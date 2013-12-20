'use strict';

angular.module('playCppApp')
    .controller('QuestionCtrl', function ($scope) {
        $scope.question = {
            'content': '选择题1：随便选啦！',
            'answers': [
                '1）答案1',
                '2）答案2',
                '3）答案3',
                '4）答案4'
            ]
        }
    })
