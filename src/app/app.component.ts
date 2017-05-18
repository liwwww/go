import { Component, Input,OnChanges, OnInit,trigger,state,style,transition,animate,keyframes } from '@angular/core';

import {MdToolbarModule, MdIconModule} from '@angular/material';
import { navComponent } from './component/navComponent/nav.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger(
    'openClose',
    [
      transition(":enter", [
        style({ opacity: 0 }),
        animate('2000ms', style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate('2000ms', style({ opacity: 0 }))
      ])
    ])],
    host: {
        '[@openClose]': 'true',
        'style': 'display: block;'
    }
})
export class AppComponent implements OnChanges{
  title = 'app works!';

  visibility = 'shown'; // 避免ngOnChanges()并降低代码复杂度
  @Input() isVisible : boolean = true;

  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }
}
