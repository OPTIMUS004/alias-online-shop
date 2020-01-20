import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { trigger,animate,style,transition,state } from '@angular/animations'
import { LikeComponent } from '../HomeFolder/like.component'
@Component({
	template: `

	<div class="row container">
				<h1> Favorites List</h1>
				<hr/>
		<div *ngFor = "let movie of movies">
			<div class="container ">
				<div class="row">
					<div class="column" >
						<div class="card">
							<img src="{{movie?.Poster}}" alt="{{movie?.Title}}" class="col">
							<div class="container bg-dark">
								<h4>{{movie?.Title}}</h4>
								<p class="title">Duration: {{movie?.Runtime}}</p>
								<p>Release Date: {{movie?.Released}}</p>
								<p class="btn-norm text-center mt-2" [routerLink]="['/alias',  movie.id]"><a>More Details</a></p>
								<p *ngIf="auth?.isAuthenticated()">
									
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	`,
	styles: [`
				.row{
					float: left;
					width:22%;
					margin-bottom: 30px;
					padding: 0 8px;
					margin-right: 16px;
					border: none;

				}
				.card{
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
					border: 0;
				}
				.container{
					padding: 0 16px;
				}
				a:hover{
					cursor: pointer;
				}
		
		@media screen and (max-width: 900px){

			.row{
				display: block;
				width: 30.33%;
			}
		}
		@media screen and (max-width: 650px){

			.row{
				display: block;
				width: 100%;
			}
		}

	`],
	animations: [trigger('fadeInOut', [
			state('void',style({opacity: 0
			})),
			transition('void<=>*',animate(2000))
		]
		)]
})
export class FavoriteComponent {
movies
constructor( public auth:AuthService ){}

ngOnInit(){
	this.movies = this.auth.getFavorite()
}
toggleData(datum){
		if(this.userHasLiked(datum)){
			this.auth.deleteLike(datum)
		}else{
			this.auth.addLike(datum)
		}
	}
userHasLiked(datum){
		return this.auth.userHasLiked(datum) 
	}
	
}