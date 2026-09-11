import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateService } from '@wawjs/ngx-translate';

interface AdvisorPlaceholder {
	name: string;
	specialty: string;
	initials: string;
}

@Component({
	selector: 'app-advisors',
	imports: [],
	templateUrl: './advisors.component.html',
	styleUrl: './advisors.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvisorsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly advisors: AdvisorPlaceholder[] = [
		{ name: 'Олена Ковальчук', specialty: 'Пенсійне планування', initials: 'ОК' },
		{ name: 'Андрій Марченко', specialty: 'Інвестиційні портфелі', initials: 'АМ' },
		{ name: 'Ірина Петренко', specialty: 'Податкове консультування', initials: 'ІП' },
		{ name: 'Дмитро Савчук', specialty: 'Фінанси для бізнесу', initials: 'ДС' },
	];
}
