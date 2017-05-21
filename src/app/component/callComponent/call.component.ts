import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { fadeIn } from '../../animation/routerAnimation';

@Component({
    moduleId:module.id,
    selector: 'CallComponent',
    templateUrl: './call.component.html',
    styleUrls: ['./call.component.css'],
  animations: [fadeIn],
    host: {
        '[@openClose]': 'true',
        'style': 'display: block;'
    }
})
export class CallComponent implements OnInit {
    constructor() { }
    ngOnInit() {
        
    }


}