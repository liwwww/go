import { Component, OnInit } from '@angular/core';

import { Detial } from '../../shared/detail/detail.model';
import { Detials } from '../../shared/detail/detail.mork';
import { detailService } from '../../shared/detail/detail.service';

@Component({
    moduleId: module.id,
    selector: 'detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
    providers: [detailService]
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