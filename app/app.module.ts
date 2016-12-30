import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import './rxjs-extensions';

// import './heroes/heroes';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './heroes/hero-search.component';
import { HeroService } from './heroes/hero.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './heroes/in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers:    [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
