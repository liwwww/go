import { Component, OnInit } from '@angular/core';

import { Project } from '../../shared/project/project.model'
import { Projects } from '../../shared/project/project.mork'
import { ProjectSevice } from '../../shared/project/project.service'

import { fadeIn } from '../../animation/routerAnimation';
declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'ProjectComponent',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
    providers: [ProjectSevice],
    animations: [fadeIn],
    host: {
        '[@openClose]': 'true',
        'style': 'display: block;'
    }
})

export class ProjectComponent implements OnInit {

    projects:Project[];
    constructor(private projectSevice:ProjectSevice) { }

    getProject():void{
        this.projects = this.projectSevice.getProjects();
    }

    ngOnInit() {
        this.getProject();
        
        
     }
}