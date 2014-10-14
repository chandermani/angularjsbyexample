describe("Workout Builder", function () {
    beforeEach(module('app'));
    beforeEach(module('WorkoutBuilder'));

    beforeEach(function () {
        module(function ($provide) {
            $provide.factory("WorkoutBuilderService", function ($q, WorkoutPlan, Exercise) {
                var mock = {};
                mock.startBuilding = function (name) { };

                mock.removeExercise = function (exercise) { };

                mock.addExercise = function (exercise) { };

                mock.save = function () { };

                mock.moveExerciseTo = function (exercise, toIndex) { }

                mock.canDeleteWorkout = function () { }

                mock.delete = function () { }

                return mock;
            });
        });
    });

    beforeEach(function () {
        module(function ($provide) {
            $provide.factory("WorkoutService", function ($q, WorkoutPlan, Exercise) {
                var mock = {};
                mock.getWorkout = function (name) { return name == "thisOnlyExists" ? $q.when({}) : $q.error("Not Found") };
                return mock;
            });
        });
    });

    describe("WorkoutDetailController", function () {
        var ctrl, $scope;

        beforeEach(inject(function ($rootScope, $controller, WorkoutBuilderService, $location, $routeParams, WorkoutService, WorkoutPlan, $q) {
            $scope = $rootScope.$new();
            ctrl = $controller("WorkoutDetailController", {
                $scope: $scope,
                WorkoutBuilderService: WorkoutBuilderService,
                selectedWorkout: new WorkoutPlan({}),
                $location: $location,
                $routeParams: $routeParams,
                WorkoutService: WorkoutService,
                $q: $q
            });
        }));

        it("should load the WorkoutDetailController", function () {
            expect(ctrl).toBeDefined();
        });

        it("should setup selected workout", function () {
            expect($scope.workout).toBeDefined();
        });

    });
});