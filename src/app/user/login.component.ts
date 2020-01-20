import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
	templateUrl: './login.component.html',
	styles: [`
			em{ margin-left: 50px; color: #E05C65;}
 			.error input{ background-color: #E3C3C5}
 			.error ::-webkit-input-placeholder { color:#999;}
 			.error ::-moz-placeholder { color: #999; }
 			.error :-moc-placeholder { color: #999; }
			.error :ms-input-placeholder { color: #999;}
			.form-control{
				border-radius: 0;
				background-clip:0;
			} 
			.comment-one{
				float: left;
				display: inline-block;
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
				margin-top: 10px;
				font-size: 13px;
			}
			`]
			})

export class LoginComponent implements OnInit {
	
	loginForm: FormGroup;
	addMode: boolean
	
	constructor(private authService:AuthService, private router:Router){
	}

	ngOnInit(){
		let userName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-z].*')]);
		let password = new FormControl('',Validators.required)

		this.loginForm = new FormGroup({
			userName,
			password
		})
	}

	showAccount(){
		this.addMode = true
	}

	userLogin(formValue){
	if(this.loginForm.valid){
		this.authService.validateUser(formValue.userName, formValue.password  );
		}else{
			alert('oops! invalid input')
		}

	}
	toggleLogin(){
		this.addMode = false;
	}
	cancel(){
		this.router.navigate(['alias'])	
	}
}
