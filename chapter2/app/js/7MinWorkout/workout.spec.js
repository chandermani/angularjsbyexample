/// <reference path="workout.spec.js" />
describe("Controllers", function () {

    beforeEach(module('app'));
    beforeEach(module('7minWorkout'));
    beforeEach(module('WorkoutBuilder'));

    describe("WorkoutController", function () {
        var ctrl, $scope, sampleWorkout;

        beforeEach(function () {
            module(function ($provide) {
                $provide.factory("WorkoutService", function ($q, WorkoutPlan, Exercise) {
                    var mock = {};
                    mock.sampleWorkout = new WorkoutPlan({
                        name: "testworkout",
                        title: "Test Workout",
                        description: "This is a test workout",
                        restBetweenExercise: "40",
                        exercises: [{ details: new Exercise({ name: "exercise1", title: "Exercise 1", description: "Exercise 1 description", image: "/image1/path" }), duration: 50 },
                                    { details: new Exercise({ name: "exercise2", title: "Exercise 2", description: "Exercise 2 description", image: "/image2/path" }), duration: 30 },
                                    { details: new Exercise({ name: "exercise3", title: "Exercise 3", description: "Exercise 3 description", image: "/image3/path" }), duration: 20 }, ]
                    });
                    mock.getWorkout = function (name) {
                        return $q.when(mock.sampleWorkout);
                    }
                    mock.totalWorkoutDuration = 180;
                    return mock;
                });
                $provide.value("workoutHistoryTracker", { startTracking: function () { }, endTracking: function () { } });
            });
        });

        beforeEach(inject(function ($rootScope, $controller, $interval, $location, $timeout, workoutHistoryTracker, WorkoutService, appEvents, Exercise) {
            $scope = $rootScope.$new();
            $scope.carousel = { next: function () { } };
            ctrl = $controller('WorkoutController', {
                '$scope': $scope,
                $interval: $interval,
                $location: $location,
                $timeout: $timeout,
                workoutHistoryTracker: workoutHistoryTracker,
                appEvents: appEvents,
                WorkoutService: WorkoutService,
                $routeParams: { id: "DummyWorkout" },
                Exercise: Exercise
            });

            spyOn(workoutHistoryTracker, 'startTracking');
            spyOn(workoutHistoryTracker, 'endTracking');
            spyOn($scope, "$emit");
            spyOn($scope.carousel, "next");

            $scope.$digest();
        }));

        it("should load the workoutController", function () {
            expect(ctrl).toBeDefined();
        });

        it("should start the workout", inject(function (WorkoutService) {
            expect($scope.workoutPlan).toEqual(WorkoutService.sampleWorkout);
            expect($scope.workoutTimeRemaining).toEqual(WorkoutService.totalWorkoutDuration);
            expect($scope.workoutPaused).toBeFalsy(false);
        }));

        it("should start the first exercise", inject(function (WorkoutService, appEvents) {
            expect($scope.currentExercise).toEqual(WorkoutService.sampleWorkout.exercises[0]);
            expect($scope.currentExerciseIndex).toEqual(0);
            expect($scope.$emit).toHaveBeenCalledWith(appEvents.workout.exerciseStarted, WorkoutService.sampleWorkout.exercises[0].details);
        }));

        it("should setup interleaved images correctly", function () {
            expect($scope.exerciseImages.length).toEqual(5);
            expect($scope.exerciseImages[1]).toEqual("img/rest.png");
            expect($scope.exerciseImages[3]).toEqual("img/rest.png");
        });

        it("should start history tracking", inject(function (workoutHistoryTracker) {
            expect(workoutHistoryTracker.startTracking).toHaveBeenCalled();
        }));

        it("should increase current exercise duration with time", inject(function ($interval) {
            expect($scope.currentExerciseDuration).toBe(0);
            $interval.flush(1000);
            expect($scope.currentExerciseDuration).toBe(1);
            $interval.flush(1000);
            expect($scope.currentExerciseDuration).toBe(2);
            $interval.flush(8000);
            expect($scope.currentExerciseDuration).toBe(10);
        }));

        it("should decrease total workout duration with time", inject(function (WorkoutService, $interval) {
            expect($scope.workoutTimeRemaining).toBe(WorkoutService.totalWorkoutDuration);
            $interval.flush(1000);
            expect($scope.workoutTimeRemaining).toBe(WorkoutService.totalWorkoutDuration - 1);
            $interval.flush(1000);
            expect($scope.workoutTimeRemaining).toBe(WorkoutService.totalWorkoutDuration - 2);
        }));

        it("should transition to next exercise on one exercise complete", inject(function (WorkoutService, $interval) {
            $interval.flush(WorkoutService.sampleWorkout.exercises[0].duration * 1000);
            expect($scope.currentExercise.details.name).toBe('rest');
            expect($scope.currentExercise.duration).toBe(WorkoutService.sampleWorkout.restBetweenExercise);
        }));

        it("should flip between rest and workout", inject(function (WorkoutService, $interval) {
            // first exercise
            expect($scope.currentExercise).toBe(WorkoutService.sampleWorkout.exercises[0]);
            $interval.flush(WorkoutService.sampleWorkout.exercises[0].duration * 1000);
            //rest exercise
            expect($scope.currentExercise.details.name).toBe('rest');
            expect($scope.currentExercise.duration).toBe(WorkoutService.sampleWorkout.restBetweenExercise);
            $interval.flush(WorkoutService.sampleWorkout.restBetweenExercise * 1000);
            //second exercise
            expect($scope.currentExercise).toBe(WorkoutService.sampleWorkout.exercises[1]);
            $interval.flush(WorkoutService.sampleWorkout.exercises[1].duration * 1000);
            //rest exercise
            expect($scope.currentExercise.details.name).toBe('rest');
            expect($scope.currentExercise.duration).toBe(WorkoutService.sampleWorkout.restBetweenExercise);
        }));

        it("should reset currentExerciseDuration on exercise flip", inject(function (WorkoutService, $interval) {
            expect($scope.currentExerciseDuration).toBe(0);
            $interval.flush(1000);
            expect($scope.currentExerciseDuration).toBe(1);
            $interval.flush(1000);
            expect($scope.currentExerciseDuration).toBe(2);
            $interval.flush((WorkoutService.sampleWorkout.exercises[0].duration - 2) * 1000);
            expect($scope.currentExerciseDuration).toBe(0);
        }));

        it("should move carousel forward", inject(function (WorkoutService, $interval) {
            $interval.flush(WorkoutService.sampleWorkout.exercises[0].duration * 1000);
            expect($scope.carousel.next).toHaveBeenCalled();
            $interval.flush(WorkoutService.sampleWorkout.restBetweenExercise * 1000);
            expect($scope.carousel.next.calls.length).toEqual(2);
        }));

        it("should end the workout when all exercises are complete", inject(function (WorkoutService, $interval, workoutHistoryTracker, $location) {
            $interval.flush(WorkoutService.sampleWorkout.exercises[0].duration * 1000);
            $interval.flush(WorkoutService.sampleWorkout.restBetweenExercise * 1000);
            $interval.flush(WorkoutService.sampleWorkout.exercises[1].duration * 1000);
            $interval.flush(WorkoutService.sampleWorkout.restBetweenExercise * 1000);
            $interval.flush(WorkoutService.sampleWorkout.exercises[2].duration * 1000);

            expect(workoutHistoryTracker.endTracking).toHaveBeenCalled();
            expect($location.path()).toEqual("/finish");
            expect($scope.workoutTimeRemaining).toBe(0);
            expect($scope.currentExercise).toBe(WorkoutService.sampleWorkout.exercises[2]);

        }));

        it("should pause workout on invoking pauseWorkout", function () {
            expect($scope.workoutPaused).toBeFalsy(false);
            $scope.pauseWorkout();
            expect($scope.workoutPaused).toBe(true);
        });

        it("should not update workoutTimeRemaining for paused workout on interval lapse", inject(function (WorkoutService, $interval) {
            expect($scope.workoutPaused).toBeFalsy(false);

            $interval.flush(1000);
            expect($scope.workoutTimeRemaining).toBe(WorkoutService.totalWorkoutDuration - 1);

            $scope.pauseWorkout();
            expect($scope.workoutPaused).toBe(true);

            $interval.flush(5000);
            expect($scope.workoutTimeRemaining).toBe(WorkoutService.totalWorkoutDuration - 1);
        }));

        it("should not update currentExerciseDuration for paused workout  on interval lapse", inject(function (WorkoutService, $interval) {
            expect($scope.workoutPaused).toBeFalsy(false);

            $interval.flush(1000);
            expect($scope.currentExerciseDuration).toBe(1);

            $scope.pauseWorkout();
            expect($scope.workoutPaused).toBe(true);

            $interval.flush(5000);
            expect($scope.currentExerciseDuration).toBe(1);
        }));

        it("should not throw error if paused multiple times", function () {
            expect($scope.workoutPaused).toBeFalsy(false);
            $scope.pauseWorkout();
            expect($scope.workoutPaused).toBe(true);
            $scope.pauseWorkout();
            expect($scope.workoutPaused).toBe(true);
            $scope.pauseWorkout();
            expect($scope.workoutPaused).toBe(true);
        });

        it("should resume workout on invoking resumeWorkout", inject(function ($interval) {
            expect($scope.workoutPaused).toBeFalsy(false);
            $scope.pauseWorkout();
            expect($scope.workoutPaused).toBe(true);
            $scope.resumeWorkout();
            expect($scope.workoutPaused).toBe(false);

            $interval.flush(1000);
            expect($scope.currentExerciseDuration).toBe(1);
        }));

        it("should not throw error on multiple resumeWorkout invocations", inject(function ($interval) {
            expect($scope.workoutPaused).toBeFalsy(false);
            $scope.pauseWorkout();
            expect($scope.workoutPaused).toBe(true);
            $scope.resumeWorkout();
            expect($scope.workoutPaused).toBe(false);

            $interval.flush(1000);
            expect($scope.currentExerciseDuration).toBe(1);

            $scope.resumeWorkout();
            expect($scope.workoutPaused).toBe(false);

            $interval.flush(1000);
            expect($scope.currentExerciseDuration).toBe(2);

            $interval.flush(1000);
            expect($scope.currentExerciseDuration).toBe(3);
        }));

        it("should toggle workout state on invoking pauseResumeToggle", function () {
            expect($scope.workoutPaused).toBeFalsy();
            $scope.pauseResumeToggle();
            expect($scope.workoutPaused).toBe(true);
            $scope.pauseResumeToggle();
            expect($scope.workoutPaused).toBeFalsy();
        });

        it("should toggle pause resume on keycodes for 'p' and 'P'", function () {
            expect($scope.workoutPaused).toBeFalsy();
            $scope.onKeyPressed({ which: 80 });
            expect($scope.workoutPaused).toBe(true);
            $scope.onKeyPressed({ which: 112 });
            expect($scope.workoutPaused).toBeFalsy();
        });
    });
});