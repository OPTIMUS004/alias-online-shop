import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from './auth.service'

@Component({
	selector: 'create-account',
	templateUrl: './create-account.component.html',
	styles: [`
				.form-control{
					border-radius: 0;
					background-clip: 0;
				}
				.comment-one{
					float: left;
					display: inline-block;
				}
				.changeColor{
					color: #007bff;
				}
				.comment-two{
					float: right;
				}
				.btn-primary{
					background-color: green;
					border-radius: 0;
					border: 0;
				}
				.btn-default{
					background-color: red;
					border-radius: 0;
					color: white;
				}
				.comment{
					margin-top: 40px;
					font-size: 13px;
				} 
		`]
})

export class CreateAccountComponent implements OnInit{

newAccount: FormGroup
@Output() addMode = new EventEmitter()

constructor(private auth:AuthService, private router:Router){
	
}

ngOnInit(){
		
		let firstName = new FormControl('',[Validators.required])
		let lastName = new FormControl()
		let userName = new FormControl()
		let password = new FormControl()
		let confirmPassword = new FormControl()

		this.newAccount = new FormGroup({
			firstName,
			lastName,
			userName,
			password,
			confirmPassword

		})
	}
switcher(){
	this.addMode.emit({})
}
saveNewUser(newUser){
	if(newUser.password === newUser.confirmPassword){
		this.auth.saveNewAccount(newUser.firstName, newUser.lastName,newUser.userName, newUser.password);
		this.router.navigate(['alias']);
	}else{
		alert("Password Mismatch!");
		
	}
}

cancel(){
		alert("you are about to leave without saving!");
		this.router.navigate(['alias']);
	}
}