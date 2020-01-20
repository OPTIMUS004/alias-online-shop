import { Component, OnInit } from '@angular/core';
import { ShopService } from './shared/shop.service';
import { ActivatedRoute } from '@angular/router'

@Component ({
	selector: 'movie-list',
	template: `
			<div class="container" >

				<h2>Trending Movies</h2>
				<hr>
			</div>
			<trending-thumbnail></trending-thumbnail>
	`,
	styles:[`.container{
				padding-top: 20px;
			}
			.show{
				display: none
			}
	`]
})

export class MovieListComponent implements OnInit {
	
 shopData: any

constructor (private flixService:ShopService, private route:ActivatedRoute){

  }
  ngOnInit(){
    this.shopData = this.route.snapshot.data['data']
  }
}