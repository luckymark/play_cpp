/**
 * User: luckystar
 * Date: 13-12-24
 * Time: 下午10:37
 */

angular.module('playCppApp')
    .factory('User', ['$resource', function($resource) {
        return $resource('/user/:id',
            {id:'@_id'},
            {
                'login': { method:'POST',isArray:false }
            })
    }])