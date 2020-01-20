
import { Resolve } from '@angular/router'
import { Injectable } from '@angular/core'
import { ShopService } from './shop.service'
import { map } from 'rxjs/operators'

@Injectable()

export class FlixListResolver implements Resolve<any> {
	constructor(private shopService:ShopService) {

	}

	resolve(){
		
		return this.shopService.getProducts().subscribe()
	}
}