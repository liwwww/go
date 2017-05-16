import { Component, OnInit,Input } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { listComponent } from '../listComponent/list.component';

import { Hero } from '../../shared/inputList.model';

@Component({
    moduleId: module.id,
    selector: 'inputComponent',
    templateUrl: 'input.component.html'
})

export class inputComponent implements OnInit {
    constructor() {

    }

    ngOnInit() { }
    @Input() hero:Hero;
}
