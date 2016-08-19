'use strict';

angular.module('playCppApp')
    .factory('Question', ['$resource', function($resource) {
    return $resource('api/question/:id',
        {id:'@_id'},
        {
            'update': { method:'PUT' }
        })
}])

