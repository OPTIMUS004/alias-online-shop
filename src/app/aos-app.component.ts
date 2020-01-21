import { Component } from '@angular/core';

@Component({
  selector: 'AOS-app',
  template:
     `
  		<div><nav-bar></nav-bar></div>
      <div><router-outlet></router-outlet></div>
      <div><app-footer></app-footer></div>
  `
})
export class AOSAppComponent {
  title = 'AOS-cart';
}
