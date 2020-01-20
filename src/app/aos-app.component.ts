import { Component } from '@angular/core';

@Component({
  selector: 'AOS-app',
  template: 	`
  		<nav-bar></nav-bar>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
  `
})
export class AOSAppComponent {
  title = 'AOS-cart';
}
