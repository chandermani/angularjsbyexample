describe("Filters", function () {
    beforeEach(module('7minWorkout'));

    describe("secondsToTime filter", function () {
        var filter;
        it('should convert integer to time format', inject(function ($filter) {
            expect($filter("secondsToTime")(5)).toBe("00:00:05");

            expect($filter("secondsToTime")(65)).toBe("00:01:05");

            expect($filter("secondsToTime")(3610)).toBe("01:00:10");
        }));
    });
});