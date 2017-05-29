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
/**
 * Created by kyle on 2/25/2017.
 */
var core_1 = require("@angular/core");
var champion_service_1 = require("../../../champion-services/services/champion.service");
var ChampionListComponent = (function () {
    function ChampionListComponent(championService) {
        this.championService = championService;
        // TODO - set up oupt event after selecting a champion
        this.notify = new core_1.EventEmitter();
        this.splashUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
    }
    ChampionListComponent.prototype.getChampions = function () {
        var _this = this;
        this.champions = [];
        for (var i = 0; i < this.championInfoList.length; i++) {
            this.championService
                .getChampionById(this.championInfoList[i].id)
                .then(function (champion) {
                _this.champions.push(champion);
            });
        }
    };
    ChampionListComponent.prototype.getChampionImage = function (champion) {
        return this.splashUrl + champion.key + "_0.jpg";
    };
    // TODO - select champion function
    ChampionListComponent.prototype.selectChampion = function () {
    };
    ChampionListComponent.prototype.ngOnChanges = function () {
    };
    ChampionListComponent.prototype.ngOnInit = function () {
        this.getChampions();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ChampionListComponent.prototype, "championInfoList", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChampionListComponent.prototype, "listName", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ChampionListComponent.prototype, "notify", void 0);
    ChampionListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'champion-list',
            templateUrl: 'champion-list.component.html'
        }), 
        __metadata('design:paramtypes', [champion_service_1.ChampionService])
    ], ChampionListComponent);
    return ChampionListComponent;
}());
exports.ChampionListComponent = ChampionListComponent;
//# sourceMappingURL=champion-list.component.js.map