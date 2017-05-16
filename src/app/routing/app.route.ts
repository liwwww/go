import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { homeComponent } from '../component/homeComponent/home.component';
import { inputComponent } from '../component/inputComponent/input.component';
import { detailComponent } from '../component/detailComponent/detail.component';

const routes: Routes = [
  { path: 'home', component: homeComponent },
  { path: 'input', component: inputComponent },
  { path: 'detail', component: detailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class appRoutingModule { }

