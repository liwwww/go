import { Injectable } from '@angular/core';

import { Skill } from './skill.model';
import { Skills } from './skill.mork';

@Injectable()
export class SkillService {
    getSkill(): Skill[] {
        return Skills;
    }
}