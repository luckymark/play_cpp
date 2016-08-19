/**
 * User: luckystar
 * Date: 14-1-12
 * Time: 下午12:30
 */

angular.module('playCppApp')
    .factory('Steps', ['$resource', function ($resource) {
        return $resource(
            'api/rest/steps/:id',
            {id: '@_id'}
        )
    }])
