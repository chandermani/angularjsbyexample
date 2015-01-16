describe("Directives", function () {
    var $compile, $rootScope, $scope;

    beforeEach(module('app'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
    }));

    describe("remote validator", function () {
        var inputElement;
        beforeEach(inject(function () {
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

        it("verify failed 'unqiue' validation should set model controller invalid.", inject(function ($q) {
            spyOn($scope, "validate").and.returnValue($q.reject());
            $compile(inputElement)($scope);
            $scope.testForm.unique.$setViewValue("dummy");
            expect($scope.validate).toHaveBeenCalled();
            $scope.$digest();

            expect($scope.testForm.$valid).toBe(false);
            expect($scope.testForm.unique.$valid).toBe(false);
            expect($scope.testForm.unique.$error.unique).toBe(true);


        }));

        it("should not have error if remote validation success", inject(function ($q) {
            spyOn($scope, "validate").and.returnValue($q.when(true));
            $scope.name = "initialValue";
            $compile(inputElement)($scope);
            $scope.testForm.unique.$setViewValue("dummy");
            $scope.$digest();

            expect($scope.validate).toHaveBeenCalled();
            expect($scope.testForm.$valid).toBe(true);
            expect($scope.testForm.unique.$valid).toBe(true);
            expect($scope.testForm.unique.$error.unique).toBeUndefined(false);
        }));
    });

    describe("remote validator with busy indicator", function () {
        var inputElement;
        beforeEach(inject(function ($q) {
            $scope.validate = function () { };
            inputElement = "<form name='testForm'><div busy-indicator=''><input type='text' name='unique' ng-model='name' remote-validator='unique' remote-validator-function='validate(value)' /></div></form>";
        }));

        it("should load busy indicator", function () {
            var e = $compile(inputElement)($scope);

            expect(e.html().indexOf("glyphicon glyphicon-refresh") > 0).toBe(true);
        });

        it("should show busy indicator when remote request is made and hide later", inject(function ($q) {
            var defer = $q.defer(),
                html = $compile(inputElement)($scope),
                childElementScope = html.children().scope();

            spyOn($scope, "validate").and.returnValue(defer.promise);

            expect(childElementScope.busy).toBeUndefined();

            $scope.testForm.unique.$setViewValue("dummy");
            expect(childElementScope.busy).toBe(true);

            defer.resolve(true);
            $scope.$digest();

            expect(childElementScope.busy).toBe(false);

        }));
    });

    describe("ajax button validator", function () {

        beforeEach(inject(function () {
            $scope.save = function (value) { };
            $scope.submitted = false;
        }));
        it("should load ajax button validator", function () {
            var inputElement = '<ajax-button on-click="save()">Save</ajax-button>';
            var e = $compile(inputElement)($scope);
            expect(e[0] instanceof HTMLButtonElement).toBe(true);

        });

        it("should load set indicator busy when request is made.", inject(function ($q) {
            var defer = $q.defer();
            spyOn($scope, "save").and.returnValue(defer.promise);
            var inputElement = '<ajax-button on-click="save()">Save</ajax-button>';
            var e = $compile(inputElement)($scope),
                isolatedScope = e.isolateScope();

            e[0].click();

            expect(isolatedScope.busy).toBe(true);
            expect($scope.save).toHaveBeenCalled();

            defer.resolve(true);
            $scope.$digest();
            expect(isolatedScope.busy).toBe(false);
        }));

        it("should load set indicator busy when submitted flag is set to true.", inject(function ($q) {
            spyOn($scope, "save").and.returnValue($q.when(true));
            var inputElement = '<ajax-button on-click="save()" submitting="{{submitted}}">Save</ajax-button>';
            var e = $compile(inputElement)($scope),
                isolatedScope = e.isolateScope();

            $scope.submitted = true;

            e[0].click();

            expect(isolatedScope.busy).toBe(true);
            expect($scope.save).toHaveBeenCalled();

            $scope.submitted = false;
            $scope.$digest();
            expect(isolatedScope.busy).toBe(false);
        }));

    });
});