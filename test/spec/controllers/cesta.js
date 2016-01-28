'use strict';

describe('Controller: CestaCtrl', function () {

  // load the controller's module
  beforeEach(module('zapatosApp'));

  var CestaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CestaCtrl = $controller('CestaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CestaCtrl.awesomeThings.length).toBe(3);
  });
});
