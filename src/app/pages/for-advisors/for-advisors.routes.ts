import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-advisors.component').then((m) => m.ForAdvisorsPageComponent),
	},
];
