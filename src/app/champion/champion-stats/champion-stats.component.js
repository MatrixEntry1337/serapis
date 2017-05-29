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
var core_1 = require("@angular/core");
var stats_1 = require("../../../../types/champion/stats");
/**
 * Created by kyle on 2/18/2017.
 */
var ChampionStatsComponent = (function () {
    function ChampionStatsComponent() {
    }
    ChampionStatsComponent.prototype.getKeys = function () {
        this.keys = Object.keys(this.stats);
        console.log("Keys of Stats:");
        console.log(this.keys);
    };
    ChampionStatsComponent.prototype.ngOnInit = function () {
        this.getKeys();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', stats_1.Stats)
    ], ChampionStatsComponent.prototype, "stats", void 0);
    ChampionStatsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'champion-stats',
            templateUrl: './champion-stats.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ChampionStatsComponent);
    return ChampionStatsComponent;
}());
exports.ChampionStatsComponent = ChampionStatsComponent;
//# sourceMappingURL=champion-stats.component.js.map