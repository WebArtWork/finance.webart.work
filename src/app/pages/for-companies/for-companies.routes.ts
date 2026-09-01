import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-companies.component').then((m) => m.ForCompaniesPageComponent),
	},
];
