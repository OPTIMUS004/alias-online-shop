import { Component, Input, OnInit } from '@angular/core';
import { trigger, animate, style, transition, state } from '@angular/animations';
import { IProduct } from '../shared/product'
import { ShopService } from '..';
import { AuthService } from 'src/app/user/auth.service';

@Component ({
	selector: './trending-thumbnail',
	templateUrl: './trending-products.component.html',
	styles: [`
				.row{
					width:22%;
					margin-bottom: 90px;
					padding: 0 8px;
					margin-right: 10px;
					border: none;

				}
				.card{
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
					border: 0;
					width:250px;
					height: 400px;
				}
				img{
					height: 300px;
				}
				.container{
					padding: 0 16px;
				}
				.btn-norm:hover{
					cursor: pointer;
				}
				thead{
					color: #337AB7;
				}
				
		@media screen and (max-width: 900px){

			.row{
				display: block;
				width: 30.33%;
			}
			.card{
				padding-right: 0;
				padding-left: 0;
				width: 250px;
			}
		}
		@media screen and (max-width: 650px){

			.row{
				display: block;
				width: 100%;
			}
			.card{
				padding-right: 0;
				padding-left: 0;
				width: 250px;
			}
			}
		}

	`],
	animations: [trigger('fadeInOut', [
			state('void', style({opacity: 0
			})),
			transition('void<=>*', animate(2000))
		]
		)]
})

export class TrendingThumbnailComponent implements OnInit{
	products: IProduct[];
	FilteredProducts: IProduct[];
	imageWidth: number = 50;
	imageHeight: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false
	pageTitle: string = 'Products List';
	errorMsg: string;
	constructor( private shopService: ShopService, private auth: AuthService) {}
	
	ngOnInit() {
		this.shopService.getProducts().subscribe({
			next: products =>{
				this.products = products 
				this.FilteredProducts = this.products ;
			},
			error: err => this.errorMsg = err
		});
	  }
		
	_listFilter: string;
	get listFilter():string{
		return this._listFilter;
	}
	set listFilter(value:string){
		this._listFilter = value;
		this.FilteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}
	

  toggleImage(): void{
	  this.showImage = !this.showImage
  }
  performFilter(filterBy:string){
	filterBy = filterBy.toLocaleLowerCase();
	console.log(this.products);
	return this.products.filter((product)=>
		product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  uponReceivedClick(message: string): void{
	this.pageTitle = ''
	this.pageTitle = `Product List: ${message} `
  }
  toggleFavorite(product) {

	if (this.userHasLiked(product)) {
		this.auth.deleteLike(product);
	} else {
		this.auth.addLike(product);
	}
}
userHasLiked(product) {
	return this.auth.userHasLiked(product);
}

}

