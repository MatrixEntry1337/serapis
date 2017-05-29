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
var ChampionSpellsComponent = (function () {
    function ChampionSpellsComponent() {
        this.imageUrl = 'http://ddragon.leagueoflegends.com/cdn/7.3.3/img/spell/';
    }
    ChampionSpellsComponent.prototype.getSpellImage = function (spellName) {
        return this.imageUrl + spellName + ".png";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ChampionSpellsComponent.prototype, "spells", void 0);
    ChampionSpellsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'champion-spells',
            templateUrl: './champion-spells.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ChampionSpellsComponent);
    return ChampionSpellsComponent;
}());
exports.ChampionSpellsComponent = ChampionSpellsComponent;
//# sourceMappingURL=champion-spells.component.js.map