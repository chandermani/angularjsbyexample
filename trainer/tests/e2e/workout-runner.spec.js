describe("Workout Runner", function () {

    var WorkoutRunnerPage = function () {
        this.description = element(by.binding("currentExercise.details.description"));
        this.steps = element(by.binding("currentExercise.details.procedure"));
        this.videos = element.all(by.repeater("video in currentExercise.details.related.videos"));
        this.pauseResume = element(by.id("pause-overlay"));
        this.exerciseHeading = element(by.binding("currentExercise.details.title"));
        this.workoutTimeRemaining = element(by.binding("workoutTimeRemaining"))
        this.exerciseTimeRemaining = element(by.binding("currentExercise.duration-currentExerciseDuration"));
    }; 

    describe("Start Page", function () {
        beforeEach(function () {
            browser.get("");
        });
        it("should load the start page.", function () {
            expect(browser.getTitle()).toBe("Personal Trainer");
            expect(element(by.id("start")).getText()).toBe("Select Workout");
        });

        it("should search workout with specific name.", function () {
            var filteredWorkouts = element.all(by.repeater("workout in workouts"));
            expect(filteredWorkouts.count()).toEqual(2);

            var searchInput = element(by.model("workoutSearch"));
            searchInput.sendKeys("test");

            expect(filteredWorkouts.count()).toEqual(1);
            expect(filteredWorkouts.first().element(by.css(".title")).getText()).toBe("A test Workout");
        });

        it("should navigate to workout runner.", function () {
            var filteredWorkouts = element.all(by.repeater("workout in workouts"));
            filteredWorkouts.first().click();
            expect(browser.getCurrentUrl()).toContain("/workout/7minworkout");
        });

    });

    describe("Workout Runner page", function () {
        beforeEach(function () {
            browser.get("#/workout/testworkout");
        });

        it("should pause workout when paused button clicked", function () {
            var page = new WorkoutRunnerPage(),
                timeRemaining;

            page.pauseResume.click();
            expect(page.pauseResume.all(by.css(".glyphicon-play")).count()).toBe(1);
            expect(page.pauseResume.all(by.css(".glyphicon-pause")).count()).toBe(0);

            page.exerciseTimeRemaining.getText().then(function (time) {
                timeRemaining = time;
                browser.sleep(3000);
            });
            page.exerciseTimeRemaining.getText().then(function (time) {
                expect(page.exerciseTimeRemaining.getText()).toBe(timeRemaining);
            });

        });

        it("should load workout data", function () {
            var page = new WorkoutRunnerPage();
            page.pauseResume.click();
            expect(page.description.getText()).toBe("The basic crunch is a abdominal exercise in a strength-training program.");
            expect(page.exerciseHeading.getText()).toBe("Abdominal Crunches");
            expect(page.videos.count()).toBe(2);
        });

        it("should transition exercise when time lapses.", function () {
            var page = new WorkoutRunnerPage();
            browser.sleep(5000);
            page.pauseResume.click();
            expect(page.videos.count()).toBe(0);
            expect(page.description.getText()).toBe("Relax a bit!");
            expect(page.exerciseHeading.getText()).toBe("Relax!");
        });

        it("should end workout when time completes", function () {
            var page = new WorkoutRunnerPage();
            browser.sleep(20000);
            expect(browser.getCurrentUrl()).toContain("/finish");
        });
    });
});