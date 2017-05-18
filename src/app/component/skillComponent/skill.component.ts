
import { Component, OnInit, trigger, state, style, animate, transition} from '@angular/core';

import { Skill } from '../../shared/skill/skill.model';
import { Skills } from '../../shared/skill/skill.mork';
import { SkillService } from '../../shared/skill/skill.service';


@Component({
    moduleId: module.id,
    selector: 'SkillComponent',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.css'],
    providers: [SkillService]
})

export class SkillComponent implements OnInit {

    skills:Skill[];

    constructor(private skillService:SkillService) { }

    getSkill():void {
        this.skills = this.skillService.getSkill();
    }

    ngOnInit() {
        this.getSkill();
     }
}