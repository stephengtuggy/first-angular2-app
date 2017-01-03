import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule }                 from '@angular/common';

import { throwIfAlreadyLoaded }         from './module-import-guard';
import { HeroService }                  from '../heroes/shared/hero.service';

@NgModule({
    imports: [
        CommonModule    // we use ngFor
    ],
    providers: [ HeroService ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
