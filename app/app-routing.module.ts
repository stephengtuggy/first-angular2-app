import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { InMemoryWebApiModule}  from 'angular-in-memory-web-api';

import { DashboardComponent }   from './dashboard.component';
// import { InMemoryDataService }  from './heroes/shared/in-memory-data.service';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './heroes/hero-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes) // ,
        // InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
