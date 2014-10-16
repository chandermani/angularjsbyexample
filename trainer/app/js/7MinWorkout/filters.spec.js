describe("Filters", function () {
    beforeEach(module('7minWorkout'));

    describe("secondsToTime filter", function () {
        it('should convert integer to time format', inject(function ($filter) {
            expect($filter("secondsToTime")(5)).toBe("00:00:05");

            expect($filter("secondsToTime")(65)).toBe("00:01:05");

            expect($filter("secondsToTime")(3610)).toBe("01:00:10");
        }));

        it('should convert return 00:00:00 if not integer', inject(function ($filter) {
            expect($filter("secondsToTime")("")).toBe("00:00:00");

            expect($filter("secondsToTime")("test")).toBe("00:00:00");
        }));
    });
});