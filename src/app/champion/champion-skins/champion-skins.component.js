/**
 * Created by kyle on 2/17/2017.
 */
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
var champion_1 = require("../../../../types/champion/champion");
var ChampionSkinsComponent = (function () {
    function ChampionSkinsComponent() {
        this.splashUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
    }
    ChampionSkinsComponent.prototype.getChampionSkinImage = function () {
        return this.splashUrl + this.champion.key + "_" + this.selectedSkin + ".jpg";
    };
    ChampionSkinsComponent.prototype.selectSkin = function (skin) {
        this.selectedSkin = skin.num;
    };
    ChampionSkinsComponent.prototype.ngOnChanges = function () {
        this.selectedSkin = 0;
        this.skins = this.champion.skins;
    };
    ChampionSkinsComponent.prototype.ngOnInit = function () {
        this.selectedSkin = 0;
        this.skins = this.champion.skins;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', champion_1.Champion)
    ], ChampionSkinsComponent.prototype, "champion", void 0);
    ChampionSkinsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'champion-skins',
            templateUrl: './champion-skins.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ChampionSkinsComponent);
    return ChampionSkinsComponent;
}());
exports.ChampionSkinsComponent = ChampionSkinsComponent;
//# sourceMappingURL=champion-skins.component.js.map