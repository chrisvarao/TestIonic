describe('test:client:unit:pages:list', function () {
    var $scope, ctrl, $timeout;
    beforeEach(function () {
        module("app");
        inject(function ($rootScope, $controller, $q, _$timeout_) {
            $scope = $rootScope.$new();
            $timeout = _$timeout_;
            ctrl = $controller("ListPage", {
                $scope: $scope
            });
        });
    });
    it('should shut the fuck up', function () {
        expect($scope).toBeDefined();
    });
});
//# sourceMappingURL=bundle.tests.js.map