System.register(['@angular/upgrade', './app.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var upgrade_1, app_module_1;
    var upgradeAdapter;
    return {
        setters:[
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            exports_1("upgradeAdapter", upgradeAdapter = new upgrade_1.UpgradeAdapter(app_module_1.AppModule));
        }
    }
});
//# sourceMappingURL=upgrade-adapter.js.map