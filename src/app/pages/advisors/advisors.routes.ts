import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./advisors.component').then((m) => m.AdvisorsPageComponent),
	},
];
