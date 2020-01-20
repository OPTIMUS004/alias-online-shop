import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'like',
	template: `
		<div class="votingWidgetContainer pointable" (click)="onClick()">
			<div class ="well">
				<div>
					<i class="fa fa-heart" [style.color]="iconColor">Add+</i>

				</div>
			</div>
		</div>
		`,
	styles: [`
				.pointable{
					text-align: center;
				}
				.pointable:hover{
					cursor: pointer;
				}
			`]
})

export class LikeComponent {
	
	@Input() set liked(val) {
		this.iconColor = val ? 'red' : 'white';
	}
	@Output() like = new EventEmitter();

	iconColor: string;

	onClick() {
		this.like.emit({});
		}
 }
