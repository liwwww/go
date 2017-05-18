import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { detailComponent } from '../component/detailComponent/detail.component';
import { ProjectComponent } from '../component/projectComponent/project.component';
import { SkillComponent } from '../component/skillComponent/skill.component';
import { CallComponent } from '../component/callComponent/call.component';

const routes: Routes = [
  { path: 'detail', component: detailComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'call', component: CallComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class appRoutingModule { 
  
}

