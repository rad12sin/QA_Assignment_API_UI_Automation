import { HeroesService } from './heroes.service';
import { FightService } from './fight.service';
import { AddHeroDto } from './dtos/addHero.dto';
export declare class FightController {
    private readonly heroesService;
    private readonly fightService;
    constructor(heroesService: HeroesService, fightService: FightService);
    reset(): {
        message: string;
    };
    fight(): {
        message: string;
    };
    addHero(addHeroDto: AddHeroDto): {
        message: string;
    };
}
