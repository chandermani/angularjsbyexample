describe("Directives", function () {
    var $compile, $rootScope, $scope;

    beforeEach(module('app'));
    beforeEach(module('/partials/workoutbuilder/workout-tile.html'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
    }));

    describe("Workout tile", function () {
        it("should load workout tile directive", inject(function ($templateCache) {
            var e = $compile("<workout-tile></workout-tile")($scope);
            $scope.$digest();
            expect(e.html().indexOf('class="duration"') > 0);
        }));
    });

});