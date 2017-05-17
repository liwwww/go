import { Injectable } from '@angular/core';

import { Detial } from './detail.model';
import { Detials } from './detail.mork';

@Injectable()
export class detailService {

    getDetails():Detial[] {
        return Detials;
    }
    
} 

