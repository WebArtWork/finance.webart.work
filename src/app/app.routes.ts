import { Routes } from '@angular/router';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';
import { MetaGuard } from '@wawjs/ngx-core';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: '',
				pathMatch: 'full',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Головна',
					},
				},
				loadChildren: () =>
					import('./pages/landing/landing.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'sign',
				canActivate: [guestGuard, MetaGuard],
				data: {
					meta: {
						title: 'Вхід',
					},
				},
				loadChildren: () =>
					import('./pages/sign/sign.routes').then((m) => m.routes),
			},
			{
				path: 'profile',
				canActivate: [authenticatedGuard, MetaGuard],
				data: {
					meta: {
						title: 'Мій профіль',
					},
				},
				loadChildren: () =>
					import('./pages/profile/profile.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'settings',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мої налаштування',
					},
				},
				loadChildren: () =>
					import('./pages/settings/settings.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'share',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Запросити у Finance',
						description:
							'Відскануйте QR-код, щоб приєднатися до Finance за кілька секунд.',
					},
				},
				loadChildren: () =>
					import('./pages/share/share.routes').then((m) => m.routes),
			},
			{
				path: 'for-users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для користувачів',
						description: 'Керуйте особистими фінансами, цілями, інвестиціями та кредитами з Finance.',
					},
				},
				loadChildren: () =>
					import('./pages/for-users/for-users.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-advisors',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для радників',
						description: 'Аналізуйте фінанси клієнтів, надавайте рекомендації та керуйте портфелями з Finance.',
					},
				},
				loadChildren: () =>
					import('./pages/for-advisors/for-advisors.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-companies',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для компаній',
						description: 'Керуйте фінансами бізнесу, залучайте фінансування та відносини з інвесторами через Finance.',
					},
				},
				loadChildren: () =>
					import('./pages/for-companies/for-companies.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-investors',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для інвесторів',
						description: 'Знаходьте інвестиційні можливості, вкладайте кошти та відстежуйте прибутковість з Finance.',
					},
				},
				loadChildren: () =>
					import('./pages/for-investors/for-investors.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: 'admin',
		canActivate: [adminsGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Користувачі',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.usersRoutes),
			},
			{
				path: 'clients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Клієнти',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.clientsRoutes),
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formsRoutes),
			},
			{
				path: 'form/:formId',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formRoutes),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full',
	},
];
