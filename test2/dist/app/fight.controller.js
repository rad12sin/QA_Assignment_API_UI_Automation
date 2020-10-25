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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const heroes_service_1 = require("./heroes.service");
const fight_service_1 = require("./fight.service");
const errorCodes_1 = require("src/errorCodes");
const addHero_dto_1 = require("./dtos/addHero.dto");
const passport_1 = require("@nestjs/passport");
let FightController = class FightController {
    constructor(heroesService, fightService) {
        this.heroesService = heroesService;
        this.fightService = fightService;
    }
    reset() {
        this.fightService.reset();
        return {
            message: 'Fight has been deleted and now all heroes went back to Helicarrier Ship.',
        };
    }
    fight() {
        if (!this.fightService.startFight()) {
            throw new common_1.HttpException({
                errorCode: errorCodes_1.default.FIGHT_COULDNT_START_NO_HEROES,
                error: 'You can not start a fight with less than 2 heroes',
            }, 400);
        }
        const winner = this.fightService.getWinner();
        return {
            message: `Heroes fought hard! The winner is ${winner.name}!`,
        };
    }
    addHero(addHeroDto) {
        if (!addHeroDto.heroId) {
            throw new common_1.HttpException({
                errorCode: errorCodes_1.default.HERO_PARAMETER_MANDATORY,
                error: 'Hero ID must be passed on the POST request',
            }, 400);
        }
        const hero = this.heroesService.getById(addHeroDto.heroId);
        if (!hero) {
            throw new common_1.HttpException({
                errorCode: errorCodes_1.default.HERO_ID_NOT_FOUND,
                error: `There is no hero with the id [${addHeroDto.heroId}]`,
            }, 400);
        }
        if (this.fightService.isHeroFighting(hero)) {
            throw new common_1.HttpException({
                errorCode: errorCodes_1.default.HERO_CANT_FIGHT_SAME_HERO,
                error: `${hero.name} could not be added because is already in the fight.`,
            }, 400);
        }
        if (!this.fightService.addHero(hero)) {
            const maxHeroesAllowed = fight_service_1.FightService.MAX_HEROES_IN_FIGHT;
            throw new common_1.HttpException({
                errorCode: errorCodes_1.default.MAX_HERO_REACHED_IN_FIGHT,
                error: `A maximum of ${maxHeroesAllowed} heroes are allowed per fight.`,
            }, 400);
        }
        const heroesCount = this.fightService.getHeroesCount();
        return {
            message: `Yippie! ${hero.name} added. At the moment ${heroesCount} hero${heroesCount > 1 ? 'es' : ''} waiting to fight.`,
        };
    }
};
__decorate([
    common_1.Delete(),
    common_1.HttpCode(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FightController.prototype, "reset", null);
__decorate([
    common_1.Post(),
    common_1.HttpCode(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FightController.prototype, "fight", null);
__decorate([
    common_1.Post('addHero'),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addHero_dto_1.AddHeroDto]),
    __metadata("design:returntype", void 0)
], FightController.prototype, "addHero", null);
FightController = __decorate([
    common_1.Controller('fight'),
    common_1.UseGuards(passport_1.AuthGuard('bearer')),
    __metadata("design:paramtypes", [heroes_service_1.HeroesService,
        fight_service_1.FightService])
], FightController);
exports.FightController = FightController;
//# sourceMappingURL=fight.controller.js.map