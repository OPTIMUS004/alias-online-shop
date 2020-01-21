import { Routes } from '@angular/router';

import { 
		WelcomeComponent,
		ProductDetailsComponent,
} from './HomeFolder/index'

import { TrendingThumbnailComponent } from './HomeFolder/trending-products/trending-thumbnail.component'

import { Error404Component } from './errors/404.component';
import { ProductDetailsGuard } from './HomeFolder/product-details/product-details.guard';

export const appRoutes: Routes = [

	{ path: 'alias', component: WelcomeComponent },
	{ path: '', redirectTo: 'alias', pathMatch: 'full' },
	{ path: 'alias/products/:id', component: ProductDetailsComponent, canActivate: [ProductDetailsGuard] },
	{ path: 'alias/products', component: TrendingThumbnailComponent },	
	{ path: '404', component: Error404Component },
	{ path: 'user', loadChildren: './user/user.module#UserModule'}
	 
];
