import { Injectable } from '@angular/core';

import { Hero } from './inputList.model';
import { HEROES } from './inputList.mork';

@Injectable ()
export class inputService {
    getHeroes():Hero[] {
        return HEROES;
    }

    getHeroesSlowly(): Promise<Hero[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 2000);
  });
}
}

