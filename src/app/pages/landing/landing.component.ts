import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpiderComponent } from '@wawjs/ngx-bos';
import { AnimateOnScrollModule } from '@wawjs/ngx-prime/animateonscroll';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

interface LandingFeature {
	number: string;
	icon: string;
	title: string;
	description: string;
	linkLabel: string;
	route: string;
}

interface LandingOpportunity {
	date: string;
	icon: string;
	title: string;
	description: string;
	tag: string;
}

interface LandingAudience {
	number: string;
	route: string;
	title: string;
	description: string;
}

@Component({
	imports: [
		RouterLink,
		SpiderComponent,
		ButtonModule,
		CardModule,
		TranslateDirective,
		AnimateOnScrollModule,
	],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
})
export class LandingComponent {
	readonly translateService = inject(TranslateService);

	readonly opportunities: LandingOpportunity[] = [
		{
			date: 'Вересень 2026',
			icon: 'pi pi-chart-line',
			title: 'Новий раунд фінансування',
			description: 'АгроКапітал шукає інвесторів на розширення виробництва',
			tag: 'Інвестиції',
		},
		{
			date: 'Серпень 2026',
			icon: 'pi pi-id-card',
			title: 'Радник приєднався до мережі',
			description: 'Планування пенсійних заощаджень та інвестицій',
			tag: 'Радники',
		},
		{
			date: 'Липень 2026',
			icon: 'pi pi-building',
			title: 'Нова компанія в каталозі',
			description: 'МедФінанс Груп відкрила профіль для інвесторів',
			tag: 'Компанії',
		},
	];

	readonly features: LandingFeature[] = [
		{
			number: '01',
			icon: 'pi pi-id-card',
			title: 'Радники',
			description:
				'Перевірені фінансові радники з чіткою спеціалізацією та історією роботи з клієнтами.',
			linkLabel: 'Переглянути радників',
			route: '/advisors',
		},
		{
			number: '02',
			icon: 'pi pi-building',
			title: 'Компанії',
			description:
				'Компанії та фінансові інституції з прозорими звітами та умовами співпраці.',
			linkLabel: 'Переглянути компанії',
			route: '/companies',
		},
		{
			number: '03',
			icon: 'pi pi-chart-line',
			title: 'Інвестиції',
			description:
				'Раунди фінансування, облігації та частки в компаніях в одному каталозі.',
			linkLabel: 'Переглянути інвестиції',
			route: '/investments',
		},
		{
			number: '04',
			icon: 'pi pi-images',
			title: 'Стрічка',
			description: 'Останні події ринку: нові раунди, радники та компанії.',
			linkLabel: 'Переглянути стрічку',
			route: '/feed',
		},
	];

	readonly audiences: LandingAudience[] = [
		{
			number: '01',
			route: '/for-users',
			title: 'Користувачам',
			description: 'Керуйте особистими фінансами та знаходьте радника чи інвестицію.',
		},
		{
			number: '02',
			route: '/for-advisors',
			title: 'Радникам',
			description: 'Ведіть клієнтів та їхні портфелі в одній системі.',
		},
		{
			number: '03',
			route: '/for-companies',
			title: 'Компаніям',
			description: 'Публікуйте фінансові звіти та залучайте інвесторів.',
		},
		{
			number: '04',
			route: '/for-investors',
			title: 'Інвесторам',
			description: 'Знаходьте перевірені можливості та відстежуйте прибутковість.',
		},
	];
}
