import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../user/auth.service'
import { Router } from '@angular/router';

@Component ({
	selector: 'nav-bar',
	templateUrl: `./nav-bar.component.html`,
	styles: [`
		.container-fluid{
			background: #00000f;
			padding: 10px;
			margin-bottom: 10px;
			}
		span{ color: red }
		ul li{
			list-style-type: none;
			margin-right: 30px
		}
		h1{
			text-align: center;
		}
		nav a:hover{ 
			border-bottom: 2px solid tomato;
			cursor: pointer; 
		}
		button{
			display: inline-block;
		}
		a{ text-decoration: none; color: #000; }
		.active{
			border-bottom: 2px solid tomato; 
		}
		.user-name{
		font-weight: bold;
		color: red;
		opacity: 0.8;
		}
		.navbar-toggler{
			outline: none;
		}
	`]
})

export class NavBarComponent implements OnChanges{
	closeDropdown: boolean = false;
	selectedItems= this.auth.isAuthenticated() ? this.auth.currentUser.favorite.length :  0;
	constructor( public auth:AuthService, private router: Router){}

	ngOnChanges(){
		this.selectedItems = this.auth.currentUser.favorite.length
	}
	
	logout(){
		this.closeDropdown = true;
		console.log(this.closeDropdown)
		this.auth.logout();
	}
	checkUser(): void {
		if (this.auth.isAuthenticated() ){
			if (this.auth.currentUser.favorite.length >= 1) {
				this.router.navigate(['user/checkout']);
			};
			alert("Add items to Cart!");
			this.router.navigate(['alias/products']);

			
		}else{
			alert("Login and add items to cart");
			this.router.navigate(['user/login']);
		}
	}
}