describe("Controllers", function () {
    beforeEach(module(app));

    describe("WorkoutController", function () {
        var ctrl, scope;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('WorkoutController', scope);
        }));

        it("should load the workoutController", function () {
            expect(ctrl).toBeDefined();
        });

    });
});