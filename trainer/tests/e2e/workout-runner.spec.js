describe("Workout Runner", function () {
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
            expect(browser.getLocationAbsUrl()).toContain("/workout/7minworkout");
        });

    });

    describe("Workout Runner page", function () {
        beforeEach(function () {
            browser.get("#/workout/7minworkout");
        });

        iit("should load workout data", function () {
            expect(element(by.id("description-panel")).element(by.css(".panel-title")).getText()).toBe("Description");
        });
    });
});