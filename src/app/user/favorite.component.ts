import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { trigger,animate,style,transition,state } from '@angular/animations'

@Component({
	template: `

	<div class="row container">
		<h4>About to be urchased goes here!</h4>
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

constructor( public auth:AuthService ){}

ngOnInit(){
	
	}
}