import { expect } from 'chai'
// import { module, inject } from 'angular-mocks/angular-mocks'
// var angular = require('angular-mocks/angular-mocks');

// import * as angular from 'angular';
// import 'angular-mocks';

import * as angular from 'angular-mocks';

export class TestDerp {

  constructor() {
    describe('test:client:unit:pages:list', () => {
      var $scope, ctrl, $timeout;

      beforeEach(function () {

        console.debug(angular, angular.mock);

        angular.mock.module("app");

        // INJECT! This part is critical
        // $rootScope - injected to create a new $scope instance.
        // $controller - injected to create an instance of our controller.
        // $q - injected so we can create promises for our mocks.
        // _$timeout_ - injected to we can flush unresolved promises.
        angular.mock.inject(($rootScope, $controller, $q, _$timeout_) => {
          // create a scope object for us to use.
          $scope = $rootScope.$new();

          // assign $timeout to a scoped variable so we can use
          // $timeout.flush() later. Notice the _underscore_ trick
          // so we can keep our names clean in the tests.
          $timeout = _$timeout_;

          // now run that scope through the controller function,
          // injecting any services or other injectables we need.
          // **NOTE**: this is the only time the controller function
          // will be run, so anything that occurs inside of that
          // will already be done before the first spec.
          ctrl = $controller("ListPage", {
              $scope: $scope
          });
        });
      });

      it('should shut the fuck up', () => {
        expect($scope).to.equal('derp');
      })
    });
  }
}
