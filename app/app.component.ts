import { Component } from '@angular/core';

// import { HeroService } from './heroes';

@Component({
    moduleId: module.id,
    selector: 'toh-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css'],
    // providers: [ HeroService ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
