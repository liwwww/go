import { Injectable } from "@angular/core";

import { Project } from "./project.model";
import { Projects } from "./project.mork";

@Injectable()
export class ProjectSevice {
    getProjects(): Project[]{
        return Projects;
    }
}