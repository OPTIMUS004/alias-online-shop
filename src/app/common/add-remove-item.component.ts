import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'add-remove-item',
    template: `

        <button type="button" class ="btn btn-success" (click)="toggleLike()">
            <div [style.color]="iconColor">+ <span class="fa fa-shopping-cart"></span></div>
        </button>`
})
export class AddRemoveItemComponent {
    addOrRemoveItem: string ='+'

constructor(private auth:AuthService) { }

@Input() set liked(val) {
    this.iconColor = val ? 'gold' : 'white';
}
@Output() like = new EventEmitter();

iconColor: string;

toggleLike() {
    if (!this.auth.isAuthenticated()) {
		alert('Sign in to add items to cart');
    }else{this.like.emit({});}
}
}
