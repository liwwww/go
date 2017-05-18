import { Component, Input,OnChanges,HostListener, OnInit,trigger,state,style,transition,animate,keyframes } from '@angular/core';

import {MdToolbarModule, MdIconModule} from '@angular/material';
import { navComponent } from './component/navComponent/nav.component';
import { appRoutingModule } from './routing/app.route';
import { Router,RouterModule,ActivatedRoute,Params } from '@angular/router';

import { fadeIn } from './animation/routerAnimation';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeIn],
    host: {
        '[@openClose]': 'true',
        'style': 'display: block;'
    }
})
export class AppComponent implements OnInit{
private isInfinitiveScrollLoaderEnabled: boolean;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.isInfinitiveScrollLoaderEnabled = false;
  }

routers:Array<String> = ["/detail","/project","/skill","/call"]; 

  ngOnInit() {

    this.router.navigate(['/detail']);
    console.log(this.router.url);
    window.onscroll = (event) => {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        
        this.isInfinitiveScrollLoaderEnabled = true;
      }
    };
  }
}
