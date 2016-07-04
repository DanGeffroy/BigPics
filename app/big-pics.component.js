"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BigPicsAppComponent = (function () {
    function BigPicsAppComponent() {
        this.input = 'nature';
        this.pics = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    }
    BigPicsAppComponent.prototype.scrollToGallery = function (event) {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BigPicsAppComponent.prototype, "input", void 0);
    BigPicsAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'big-pics-app',
            templateUrl: 'big-pics.component.html',
            styleUrls: ['big-pics.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BigPicsAppComponent);
    return BigPicsAppComponent;
}());
exports.BigPicsAppComponent = BigPicsAppComponent;
//# sourceMappingURL=..\big-pics.component.js.map