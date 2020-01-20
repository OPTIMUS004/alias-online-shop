import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
	templateUrl: './profile.component.html',
	styles: 	[`
			em{ margin-left: 50px; color: #E05C65;}
 			.error input{ background-color: #E3C3C5}
 			.error ::-webkit-input-placeholder { color:#999;}
 			.error ::-moz-placeholder { color: #999; }
 			.error :-moc-placeholder { color: #999; }
 			.error :ms-input-placeholder { color: #999;}
			`]
		})

export class ProfileComponent {

profileForm: FormGroup;

constructor( private auth:AuthService, private router:Router){}
	ngOnInit(){
		let userName = new FormControl(this.auth.currentUser.username, [Validators.required, Validators.pattern('[a-zA-z].*')] )
		let password = new FormControl(this.auth.currentUser.password, [Validators.required, Validators.pattern('[a-zA-z].*')])

		this.profileForm = new FormGroup({
			userName,
			password 
		})
	}

	saveProfile(formValue){
		if(this.profileForm.valid){
		this.auth.updateProfile(formValue.userName, formValue.password)
		this.router.navigate(['/alias'])
		}else{
			alert('Invalid Input')
		}
	}
	cancel(){

	}
}