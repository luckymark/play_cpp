'use strict';

describe('Controller: QuestionCtrl', function () {

  // load the controller's module
  beforeEach(module('playCppApp'));

  var QuestionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestionCtrl = $controller('QuestionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a question to the scope', function () {
    expect(scope.question.answers.length).toBe(4);
  });
});
