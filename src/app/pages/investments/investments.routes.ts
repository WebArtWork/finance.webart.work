import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./investments.component').then((m) => m.InvestmentsPageComponent),
	},
];
