import Hero from './interfaces/hero.interface';
export declare class FightService {
    static MAX_HEROES_IN_FIGHT: number;
    private readonly fight;
    getHeroesCount(): number;
    reset(): void;
    addHero(hero: Hero): boolean;
    isHeroFighting(hero: Hero): boolean;
    startFight(): boolean;
    getWinner(): Hero;
}
