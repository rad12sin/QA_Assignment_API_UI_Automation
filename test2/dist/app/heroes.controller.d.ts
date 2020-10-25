import { HeroesService } from './heroes.service';
export declare class HeroesController {
    private readonly heroesService;
    constructor(heroesService: HeroesService);
    getHero(params: any): import("./interfaces/hero.interface").default;
    getAllHeroes(): import("./interfaces/hero.interface").default[];
}
