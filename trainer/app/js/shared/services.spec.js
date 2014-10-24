describe("Shared Services", function () {
    beforeEach(module('app'));
    
    describe("Workout Service", function () {
        var WorkoutService, $httpBackend,
        collectionUrl = "https://api.mongolab.com/api/1/databases/testdb/collections",
        apiKey = "testKey";

        beforeEach(module(function (WorkoutServiceProvider, ApiKeyAppenderInterceptorProvider) {
            WorkoutServiceProvider.configure("testdb");
            ApiKeyAppenderInterceptorProvider.setApiKey("testKey")
        }));

        beforeEach(inject(function (_WorkoutService_, _$httpBackend_) {
            WorkoutService = _WorkoutService_;
            $httpBackend = _$httpBackend_;
        }));

        it("should load Workout service", function () {
            expect(WorkoutService).toBeDefined();
        });

        it("should request all workouts endpoints", function () {
            $httpBackend.expectGET(collectionUrl + "/workouts?apiKey=" + "testKey").respond([]);
            WorkoutService.getWorkouts();
            $httpBackend.flush();
        });

        it("should return all workout plans", inject(function (WorkoutPlan) {
            $httpBackend.expectGET(collectionUrl + "/workouts?apiKey=" + "testKey").respond([{ name: "Workout1", title: "workout1" }, { name: "Workout1", title: "workout1" }]);
            var result = null;
            WorkoutService.getWorkouts()
                          .then(function (workouts) {
                              result = workouts;
                          });
            $httpBackend.flush();

            expect(result.length).toBe(2);
            expect(result[0] instanceof WorkoutPlan).toBe(true);
        }));

        it("should return a workout plan with specific name", inject(function (WorkoutPlan, $q) {
            spyOn(WorkoutService.Exercises, "query").and.returnValue({ $promise: $q.when([{ name: "exercise1", title: "exercise 1" }]) });
            $httpBackend.expectGET(collectionUrl + "/workouts/testplan?apiKey=" + "testKey").respond({ name: "Workout1", title: "Workout 1", restBetweenExercise: 30 });
            var result = null;
            WorkoutService.getWorkout("testplan")
                          .then(function (workout) { result = workout; });
            $httpBackend.flush();

            expect(result.name).toBe("Workout1");
            expect(result instanceof WorkoutPlan).toBe(true);
            expect(WorkoutService.Exercises.query).toHaveBeenCalled();
        }));

        it("should map exercises to workout plan correctly in getWorkout", inject(function (WorkoutPlan, Exercise, $q) {
            spyOn(WorkoutService.Exercises, "query").and.returnValue({ $promise: $q.when([{ name: "exercise1", title: "exercise 1" }, { name: "exercise2", title: "exercise 2" }, { name: "exercise3", title: "exercise 3" }], { name: "exercise4", title: "exercise 4" }) });
            $httpBackend.expectGET(collectionUrl + "/workouts/testplan?apiKey=" + "testKey").respond({ name: "Workout2", title: "Workout 1", restBetweenExercise: 30, exercises: [{ name: "exercise2", duration: 31 }, { name: "exercise4", duration: 31 }] });
            var result = null;
            WorkoutService.getWorkout("testplan")
                          .then(function (workout) { result = workout; });
            $httpBackend.flush();

            expect(result.name).toBe("Workout2");
            expect(WorkoutService.Exercises.query).toHaveBeenCalled();
            expect(result instanceof WorkoutPlan).toBe(true);
            expect(result.exercises.length).toBe(2);
            expect(result.exercises[0].name).toBe("exercise2");
            expect(result.exercises[1].name).toBe("exercise4");
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
});