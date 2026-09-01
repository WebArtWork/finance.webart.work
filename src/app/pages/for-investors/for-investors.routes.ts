import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-investors.component').then((m) => m.ForInvestorsPageComponent),
	},
];
