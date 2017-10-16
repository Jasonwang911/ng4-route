import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {

	constructor() {}

	canActivate() {
		let  loggedIn: boolean = Math.random() < 0.5;

		if(!loggedIn) {
			console.log('用户没登录');
		}

		return loggedIn;
	}
}
