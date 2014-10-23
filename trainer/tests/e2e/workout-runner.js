describe("Workout Runner",function() {
	describe("Start Page",function() {
		beforeEach(function() {
			browser.get("");
		});
		it("should load the start page.",function(){
			expect(browser.getTitle()).toBe("Personal Trainer");
			expect(element(by.id("start")).getText()).toBe("Select Workout");
		});
		
	});
});