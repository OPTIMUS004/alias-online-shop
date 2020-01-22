import { trigger, animate, style, transition, state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ShopService } from './shared/shop.service';
import { ActivatedRoute } from '@angular/router';
@Component ({
	selector: 'welcome',
	templateUrl: './welcome.component.html',
	styles: [`.container{
				padding-top: 20px;
			}
			.red{
				color: red;
				opacity: .8;
			}
			.promo{
				background-image: url('/assets/images/shopping.jpg');
				background-size: cover;
				background-position: center;
				margin: 0;
				width:100%;
				height: 400px;
				padding-top: 50px;
			}
			.show{
				display: none;
			}
			.form-control{
				border-radius: 0;
				background-clip: 0;
			}
			a{
				text-decoration: none;
			}
			.btn{
				color: #111;
			}
			.browse{
				display: flex;
				flex-direction: column;
				justify-content center;
				align-items: center;
			}
			#searchForm{
				margin-bottom: 15px;
			}
			.flex-container{
				display: flex;
				flex-flow: row wrap;
          		justify-content: center;
          		justify-item: center;
			}
	`],
	animations: [trigger('EnterLeave', [
		state('flyIn', style({transform: 'translateX(0)'})),
		transition(':enter', [
		style({transform: 'translateX(100%)'}),
		animate('1s 300ms ease-in')
		]),
		transition(':leave', [
		animate('0.3s ease-out', style({transform: 'translateX(-100%)'}))
		])
		])]

})

export class WelcomeComponent{

  products: any;
  searchTerm = '';
  foundSessions;

	constructor(private shopService: ShopService, private route: ActivatedRoute) {

  }
 
  searchSessions(searchTerm) {

	this.shopService.searchSessions(searchTerm).subscribe(sessions => {
		this.foundSessions = sessions;
		});

	}
}
