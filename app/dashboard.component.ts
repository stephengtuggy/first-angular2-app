import { Component, OnInit } from '@angular/core';

// import { Hero, HeroService } from './heroes/shared';
import { Hero } from './heroes/shared/hero.model';
import { HeroService } from './heroes/shared/hero.service';


@Component({
    moduleId: module.id,
    selector: 'toh-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then((heroes: Hero[]) => this.heroes = heroes.slice(1, 5));
    }
}
