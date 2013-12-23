'use strict';

angular.module('playCppApp')
    .factory('Question', ['$resource', function($resource) {
    return $resource('/question/:id',
        {id:'@_id'},
        {
            'update': { method:'PUT' }
        })
}])

