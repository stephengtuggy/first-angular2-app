import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
// import { RouterModule }         from '@angular/router';
import { InMemoryWebApiModule}  from 'angular-in-memory-web-api';
import './rxjs-extensions';

// import './heroes/heroes';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './heroes/hero-search.component';
import { HeroService } from './heroes/shared/hero.service';
import { InMemoryDataService } from './heroes/shared/in-memory-data.service';
import { AppRoutingModule }     from './app-routing.module';
// import { HeroesModule }         from './heroes/heroes.module';
import { AppComponent }         from './app.component';
import { CoreModule }           from './core/core.module';
import { SharedModule }         from './shared/shared.module';
import { DashboardComponent }   from './dashboard.component';

@NgModule({
  imports:      [
    BrowserModule,
    CoreModule,
    SharedModule,
    // HeroesModule,
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
  // exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
