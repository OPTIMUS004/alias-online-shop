import { Injectable } from '@angular/core'
import {IUser } from './user.model'
import { Router } from '@angular/router'
@Injectable()

export class AuthService{
	currentUser: IUser

	constructor(private router:Router){}

	validateUser(userName: string, password: string){
		users.some((user) => {
		if (user.username === userName && user.password === password){
			 this.currentUser = user;
			 return this.router.navigate(['alias']);
			
				}else{
					alert("Invalid Username or Password");
				return this.router.navigate(['user/login'])
				}			
			})
		}

isAuthenticated(){
	return !!this.currentUser;
}
deleteLike(product){
	this.currentUser.favorite = this.currentUser.favorite.filter( datum =>datum !=product );
	console.log(this.currentUser.favorite);
}
addLike(product){
	this.currentUser.favorite.push(product)
	console.log(this.currentUser.favorite);
}
userHasLiked(product){
	if(this.isAuthenticated()){
	return this.currentUser.favorite.some( datum => datum === product )
	}else{ return false; }
}

saveNewAccount(firstName, lastName, userName, password){
	
	const newUser = {
			username: userName,
			password: password,
			email: 'random.com',
			favorite: []
			}
	users.push(newUser);
	this.currentUser = newUser;
}

getFavorite(){
			return this.currentUser.favorite.length;
		}

logout(){
	this.currentUser = undefined;
	this.router.navigate(['user/login'])
}

updateProfile(userName, password){
	this.currentUser.username = userName;
	this.currentUser.password = password; 
	}
}

const users =[
	{
		username: 'FirstUser',
		password: 'pass',
		email: 'firstuser.com',
		favorite:[]
	},
	{
		username: 'SecondUser',
		password: 'pass',
		email: 'seconduser.com',
		favorite:[]
	}
]