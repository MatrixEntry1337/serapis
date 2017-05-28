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
var champion_info_service_1 = require("../modules/champion-services/services/champion-info.service");
var HomeSectionComponent = (function () {
    function HomeSectionComponent(championInfoService) {
        this.championInfoService = championInfoService;
        this.freeToPlay = 'Free To Play';
    }
    HomeSectionComponent.prototype.getChampionList = function () {
        var _this = this;
        this.championInfoService
            .getFreeToPlayChampions()
            .then(function (championInfoList) {
            console.log(championInfoList);
            _this.championInfoList = championInfoList;
        });
    };
    HomeSectionComponent.prototype.ngOnInit = function () {
        this.getChampionList();
    };
    HomeSectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            styleUrls: ['home.component.css'],
            templateUrl: 'home.component.html'
        }),
        __metadata('design:paramtypes', [champion_info_service_1.ChampionInfoService])
    ], HomeSectionComponent);
    return HomeSectionComponent;
}());
exports.HomeSectionComponent = HomeSectionComponent;
//# sourceMappingURL=home-section.component.js.map
