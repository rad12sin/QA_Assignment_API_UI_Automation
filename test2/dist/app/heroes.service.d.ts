import Hero from './interfaces/hero.interface';
export declare class HeroesService {
    heroes: any;
    getById(heroId: string): Hero;
    getAll(): Hero[];
}
