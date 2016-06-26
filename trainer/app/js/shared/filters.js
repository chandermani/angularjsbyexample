System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ng2Translate(ng2TranslateService) {
        function translate(input) {
            if (input && ng2TranslateService.currentLang) {
                return ng2TranslateService.instant(input);
            }
        }
        translate['$stateful'] = true;
        return translate;
    }
    exports_1("ng2Translate", ng2Translate);
    return {
        setters:[],
        execute: function() {
            ng2Translate.$inject = ['ng2TranslateService'];
            angular.module('app').filter("ng2Translate", ng2Translate);
        }
    }
});
//# sourceMappingURL=filters.js.map