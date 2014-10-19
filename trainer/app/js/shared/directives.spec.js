describe("Directives", function () {
    var $compile, $rootScope,$scope;
    
    beforeEach(module('app'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
    }));
    describe("remote validator", function () {
        var inputElement;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope.validate = function (value) { };
            inputElement = "<form name='testForm'><input type='text' name='unique' ng-model='name' remote-validator='unique' remote-validator-function='validate(value)' /></form>";
        }));

        it("should fail if ng-model not defined.", function () {
            expect($compile("<div remote-validator='unique' remote-validator-function='validate(value)'></div>")).toThrow();

        });

        it("should load the directive without error", function () {
            $compile(inputElement)($scope);
        });
        
        it("should verify unique value when use input changes", inject(function ($q) {
            spyOn($scope, "validate").and.returnValue($q.when(true));
            $compile(inputElement)($scope);
            $scope.testForm.unique.$setViewValue("dummy");
            expect($scope.validate).toHaveBeenCalled();
        }));

        it("verify unqiue if failed should clear model", inject(function ($q) {
            spyOn($scope, "validate").and.returnValue($q.when(false));
            $compile(inputElement)($scope);
            $scope.testForm.unique.$setViewValue("dummy");
            $scope.$digest();

            expect($scope.validate).toHaveBeenCalled();
            expect($scope.testForm.$valid).toBe(false);
            expect($scope.testForm.unique.$valid).toBe(false);
            expect($scope.testForm.unique.$error.unique).toBe(true);


        }));

        it("should verify unique value when use input changes", inject(function ($q) {
            spyOn($scope, "validate").and.returnValue($q.when(true));
            $scope.name = "initialValue";
            $compile(inputElement)($scope);
            $scope.testForm.unique.$setViewValue("dummy");
            $scope.$digest();

            expect($scope.validate).toHaveBeenCalled();
            expect($scope.testForm.$valid).toBe(true);
            expect($scope.testForm.unique.$valid).toBe(true);
            expect($scope.testForm.unique.$error.unique).toBe(false);
        }));
    });

    describe("remote validator with busy indicator", function () {
        var inputElement;
        beforeEach(inject(function (_$compile_, _$rootScope_,$q) {
            $scope.validate = function (value) { };
            inputElement = "<form name='testForm'><div busy-indicator=''><input type='text' name='unique' ng-model='name' remote-validator='unique' remote-validator-function='validate(value)' /></div></form>";
            spyOn($scope, "validate").and.returnValue($q.when(false));
        }));

        it("should load busy indicator", function () {
            var compiledElement = $compile(inputElement)($scope),
                childElementScope = compiledElement.children().scope();

            expect(compiledElement.html().indexOf("glyphicon glyphicon-refresh") > 0).toBe(true);
        });

        it("should show busy indicator when remote request is made and hide later", function () {
            var html = $compile(inputElement)($scope),
                childElementScope = html.children().scope();
            expect(childElementScope.busy).toBeUndefined();

            $scope.testForm.unique.$setViewValue("dummy");
            expect(childElementScope.busy).toBe(true);
            $scope.$digest();

            expect(childElementScope.busy).toBe(false);

        });
    });

});