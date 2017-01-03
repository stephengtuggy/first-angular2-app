import { NgModule }                                 from '@angular/core';
import { HttpModule }                               from '@angular/http';
// import { InMemoryWebApiModule}                      from 'angular-in-memory-web-api';

import { SharedModule }                             from '../shared/shared.module';
import { HeroesRoutingModule, routedComponents }    from './heroes-routing.module';
import { HeroesComponent }                          from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
// import { HeroService } from './shared/hero.service';
// import { InMemoryDataService }                      from './shared/in-memory-data.service';

@NgModule({
    imports:        [
        HeroesRoutingModule,
        SharedModule,
        HttpModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations:   [
        routedComponents,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ] // ,
    // providers:      [
    //     HeroService
    // ] // ,
    // exports: [ HeroesComponent ]
})
export class HeroesModule {}
