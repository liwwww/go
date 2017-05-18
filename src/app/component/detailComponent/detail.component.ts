import { Component, OnInit, trigger, state, style, animate, transition } from '@angular/core';

import { Detial } from '../../shared/detail/detail.model';
import { Detials } from '../../shared/detail/detail.mork';
import { detailService } from '../../shared/detail/detail.service';

@Component({
    moduleId: module.id,
    selector: 'detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
    providers: [detailService],
    host: {
     '[@routeAnimation]': 'true',
     '[style.display]': "'block'",
     '[style.position]': "'absolute'"
   },
  animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateY(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateY(100%)', opacity: 0}),
        animate(1000)
      ]),
      transition('* => void', animate(1000, style({transform: 'translateY(100%)', opacity: 0})))
    ])
  ]
})
export class detailComponent implements OnInit {

    detials:Detial[];

    constructor(private detailservice:detailService){};

    getDetails():void{
        this.detials = this.detailservice.getDetails();
    }

    ngOnInit() { 
        this.getDetails();
    }
}