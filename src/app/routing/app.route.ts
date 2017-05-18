import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { homeComponent } from '../component/homeComponent/home.component';
import { inputComponent } from '../component/inputComponent/input.component';
import { detailComponent } from '../component/detailComponent/detail.component';
import { ProjectComponent } from '../component/projectComponent/project.component';
import { SkillComponent } from '../component/skillComponent/skill.component';
import { CallComponent } from '../component/callComponent/call.component';

const routes: Routes = [
  { path: 'home', component: homeComponent },
  { path: 'input', component: inputComponent },
  { path: 'detail', component: detailComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'call', component: CallComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class appRoutingModule { }

