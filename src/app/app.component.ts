import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    md-card {
      max-width: 40%;
      margin: 2em auto;
    }
  `],
  template: `
    <md-card>
      <md-card-title>Courses Catalog</md-card-title>
      <md-card-content>
        <router-outlet></router-outlet>
      </md-card-content>
    </md-card>
  `,
})
export class AppComponent {
}
