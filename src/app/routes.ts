import { Routes } from '@angular/router';

import { 
		WelcomeComponent,
		DetailsPageComponent,
		FlixRouteActivator,
} from './HomeFolder/index'

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [

	{ path: 'alias', component: WelcomeComponent },

	{ path: '', redirectTo: 'alias', pathMatch: 'full' },
	{ path: 'alias/products', component: DetailsPageComponent, canActivate: [FlixRouteActivator] },
	{ path: 'alias/:id', component: DetailsPageComponent, canActivate: [FlixRouteActivator] },
	{ path: '404', component: Error404Component },
	{ path: 'user', loadChildren: './user/user.module#UserModule'}
	 
];
