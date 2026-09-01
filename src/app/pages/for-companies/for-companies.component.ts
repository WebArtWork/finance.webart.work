import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-companies',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-companies.component.html',
	styleUrl: './for-companies.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForCompaniesPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Чи підходить Finance для малого бізнесу?',
			answer: 'Так. Компанія може вести лише фінансові звіти й активи, а функції залучення інвестицій підключити пізніше.',
		},
		{
			question: 'Як працює залучення фінансування?',
			answer: 'Компанія публікує раунд фінансування з сумою, умовами та призначенням коштів, а інвестори бачать його в маркетплейсі можливостей.',
		},
		{
			question: 'Чи бачать інвестори всі мої фінансові дані?',
			answer: 'Ні. Ви самі обираєте, які звіти й показники публікувати для потенційних інвесторів.',
		},
	];
}
