describe("Workout Runner", function () {
    describe("Start Page", function () {
        beforeEach(function () {
            browser.get("");
        });
        it("should load the start page.", function () {
            expect(browser.getTitle()).toBe("Personal Trainer");
            expect(element(by.id("start")).getText()).toBe("Select Workout");
        });

        it("should have a search workout.", function () {
            var filteredWorkouts = element.all(by.repeater("workout in workouts"));
            expect(filteredWorkouts.count()).toEqual(2);

            var searchInput = element(by.model("workoutSearch"));
            searchInput.sendKeys("test");

            expect(filteredWorkouts.count()).toEqual(1);
            expect(filteredWorkouts.first().element(by.css(".title")).getText()).toBe("A test Workout");
        });

    });
});