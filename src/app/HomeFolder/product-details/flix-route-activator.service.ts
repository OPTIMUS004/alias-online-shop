import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { ShopService } from '../shared/shop.service'

@Injectable()

export class FlixRouteActivator implements CanActivate {
	constructor(private shopService:ShopService, private router:Router ) {

	}

	canActivate(route:ActivatedRouteSnapshot){
		const linkExist = !!this.shopService.getProduct(+route.params['id'])

		if (!linkExist)
			this.router.navigate(['/404'])
		return linkExist
	}
}