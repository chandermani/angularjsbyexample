describe("Workout Builder", function () {
    beforeEach(module('app'));
    beforeEach(module('7minWorkout'));
    beforeEach(module('WorkoutBuilder'));

    it("should default to start workout route", inject(function ($rootScope, $location, $route, $httpBackend) {    //Unless we inject $route route transitions do not happen, even if we change location\
        $httpBackend.whenGET("partials/workout/start.html").respond("<div/>");
        $location.path("/");
        $rootScope.$digest();
        expect($location.path()).toBe("/start");
    }));

    it("should load the workout.", inject(function ($rootScope, $location, $route, $httpBackend) {
        $httpBackend.whenGET("partials/workout/workout.html").respond("<div/>");
        $location.path("/workout/dummyWorkout");
        $rootScope.$digest();
        expect($location.path()).toBe("/workout/dummyWorkout");
        expect($route.current.params.id).toBe('dummyWorkout');
    }));

    it("should start workout building when navigating to workout builder route.", inject(function ($rootScope, $location, $route, $httpBackend,WorkoutBuilderService) {
        spyOn(WorkoutBuilderService, "startBuilding");
        $httpBackend.whenGET("partials/workoutbuilder/workout.html").respond("<div/>");
        $location.path("/builder/workouts/new");
        $rootScope.$digest();
        expect($location.path()).toBe("/builder/workouts/new");
        expect(WorkoutBuilderService.startBuilding).toHaveBeenCalled();
        expect(WorkoutBuilderService.startBuilding.calls.count()).toBe(1);
    }));

});