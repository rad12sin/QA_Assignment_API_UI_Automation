"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FightService_1;
const common_1 = require("@nestjs/common");
let FightService = FightService_1 = class FightService {
    constructor() {
        this.fight = {
            heroes: [],
            winner: null,
        };
    }
    getHeroesCount() {
        return this.fight.heroes.length;
    }
    reset() {
        this.fight.heroes = [];
        this.fight.winner = null;
    }
    addHero(hero) {
        if (this.fight.heroes.length === FightService_1.MAX_HEROES_IN_FIGHT) {
            return false;
        }
        this.fight.heroes.push(hero);
        return true;
    }
    isHeroFighting(hero) {
        return this.fight.heroes.some(h => h.id === hero.id);
    }
    startFight() {
        if (this.fight.heroes.length < 2) {
            return false;
        }
        this.fight.winner = this.fight.heroes.reduce((winner, hero) => {
            if (!winner || hero.powerlevel > winner.powerlevel) {
                winner = hero;
                return winner;
            }
        }, null);
        return true;
    }
    getWinner() {
        return this.fight.winner;
    }
};
FightService.MAX_HEROES_IN_FIGHT = 3;
FightService = FightService_1 = __decorate([
    common_1.Injectable()
], FightService);
exports.FightService = FightService;
//# sourceMappingURL=fight.service.js.map