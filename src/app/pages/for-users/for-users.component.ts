import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-users',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-users.component.html',
	styleUrl: './for-users.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForUsersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує користування Finance?',
			answer: 'Ведення рахунків, цілей і базової фінансової історії безкоштовне для особистого використання.',
		},
		{
			question: 'Чи можу я підключити лише свої рахунки й цілі, без інвестицій?',
			answer: 'Так. Ви можете почати лише з Рахунків і Цілей — Інвестиції, Кредити та Активи підключаються за потребою.',
		},
		{
			question: 'Чи бачить хтось мої фінансові дані?',
			answer: 'Ваші рахунки й транзакції приватні. Ви самі вирішуєте, чи поділитися ними з радником для отримання рекомендацій.',
		},
	];
}
