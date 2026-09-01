import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-advisors',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-advisors.component.html',
	styleUrl: './for-advisors.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForAdvisorsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки клієнтів я можу вести на Finance?',
			answer: 'Кількість клієнтів необмежена — кожен отримує окремий профіль з цілями, портфелем і фінансовим планом.',
		},
		{
			question: 'Чи бачу я дані клієнта автоматично?',
			answer: 'Ні. Клієнт сам надає доступ до своїх рахунків і цілей, після чого ви можете аналізувати їх і будувати план.',
		},
		{
			question: 'Чи можу я вести облік лише кількох клієнтів для початку?',
			answer: 'Так. Ви можете почати з одного-двох клієнтів і додавати нових у міру росту практики.',
		},
	];
}
