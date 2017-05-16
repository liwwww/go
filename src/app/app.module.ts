import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRoutingModule } from './routing/app.route';

import { AppComponent } from './app.component';
import { inputComponent } from './component/inputComponent/input.component';
import { listComponent } from './component/listComponent/list.component';
import { homeComponent } from './component/homeComponent/home.component';
import { detailComponent } from './component/detailComponent/detail.component';
import { navComponent } from './component/navComponent/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    inputComponent,
    listComponent,
    homeComponent,
    detailComponent,
    navComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
