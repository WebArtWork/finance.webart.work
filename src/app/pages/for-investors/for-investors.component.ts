import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-investors',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-investors.component.html',
	styleUrl: './for-investors.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForInvestorsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Як я знаходжу інвестиційні можливості на Finance?',
			answer: 'Компанії публікують раунди фінансування з сумою, умовами та призначенням коштів — ви переглядаєте їх у маркетплейсі можливостей.',
		},
		{
			question: 'Чи можу я відстежувати прибутковість своїх інвестицій?',
			answer: 'Так. Кожна інвестиція веде історію вартості й прибутковості, а портфель показує загальну картину.',
		},
		{
			question: 'Чи можу я інвестувати невеликі суми для початку?',
			answer: 'Так. Ви можете почати з невеликих сум і поступово розширювати портфель у міру довіри до платформи.',
		},
	];
}
