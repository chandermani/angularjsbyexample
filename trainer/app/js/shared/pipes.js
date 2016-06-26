System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SearchPipe, OrderByPipe, SecondsToTime;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchPipe = (function () {
                function SearchPipe() {
                }
                SearchPipe.prototype.transform = function (value, field, searchTerm) {
                    if (!field)
                        return [];
                    if ((!searchTerm && searchTerm !== false) || 0 === searchTerm.length)
                        return value;
                    if (typeof (searchTerm) === "boolean") {
                        return value.filter(function (item) { return item[field] == searchTerm; });
                    }
                    return value.filter(function (item) { return item[field].startsWith(searchTerm); });
                };
                SearchPipe = __decorate([
                    core_1.Pipe({
                        name: 'search'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchPipe);
                return SearchPipe;
            }());
            exports_1("SearchPipe", SearchPipe);
            OrderByPipe = (function () {
                function OrderByPipe() {
                }
                OrderByPipe.prototype.transform = function (value, field) {
                    if (value == null) {
                        return null;
                    }
                    if (field.startsWith("-")) {
                        field = field.substring(1);
                        if (typeof value[field] === 'string' || value[field] instanceof String) {
                            return value.slice().sort(function (a, b) { return b[field].localeCompare(a[field]); });
                        }
                        return value.slice().sort(function (a, b) { return b[field] - a[field]; });
                    }
                    else {
                        if (typeof value[field] === 'string' || value[field] instanceof String) {
                            return value.slice().sort(function (a, b) { return -b[field].localeCompare(a[field]); });
                        }
                        return value.slice().sort(function (a, b) { return a[field] - b[field]; });
                    }
                };
                OrderByPipe = __decorate([
                    core_1.Pipe({
                        name: 'orderBy'
                    }), 
                    __metadata('design:paramtypes', [])
                ], OrderByPipe);
                return OrderByPipe;
            }());
            exports_1("OrderByPipe", OrderByPipe);
            SecondsToTime = (function () {
                function SecondsToTime() {
                }
                SecondsToTime.prototype.transform = function (value) {
                    if (!isNaN(value)) {
                        var hours = Math.floor(value / 3600);
                        var minutes = Math.floor((value - (hours * 3600)) / 60);
                        var seconds = value - (hours * 3600) - (minutes * 60);
                        return ("0" + hours).substr(-2) + ':'
                            + ("0" + minutes).substr(-2) + ':'
                            + ("0" + seconds).substr(-2);
                    }
                    return;
                };
                SecondsToTime = __decorate([
                    core_1.Pipe({
                        name: 'secondsToTime'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SecondsToTime);
                return SecondsToTime;
            }());
            exports_1("SecondsToTime", SecondsToTime);
        }
    }
});
//# sourceMappingURL=pipes.js.map