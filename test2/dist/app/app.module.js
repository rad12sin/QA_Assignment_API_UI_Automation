"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const heroes_controller_1 = require("./heroes.controller");
const heroes_service_1 = require("./heroes.service");
const fight_service_1 = require("./fight.service");
const fight_controller_1 = require("./fight.controller");
const auth_service_1 = require("./auth.service");
const http_strategy_1 = require("./http.strategy");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [heroes_controller_1.HeroesController, fight_controller_1.FightController],
        providers: [heroes_service_1.HeroesService, fight_service_1.FightService, auth_service_1.AuthService, http_strategy_1.HttpStrategy],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map