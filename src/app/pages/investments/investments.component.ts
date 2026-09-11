import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateService } from '@wawjs/ngx-translate';

interface InvestmentPlaceholder {
	title: string;
	category: string;
	target: string;
}

@Component({
	selector: 'app-investments',
	imports: [],
	templateUrl: './investments.component.html',
	styleUrl: './investments.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvestmentsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly investments: InvestmentPlaceholder[] = [
		{ title: 'Раунд фінансування АгроКапітал', category: 'Сільське господарство', target: '₴2 000 000' },
		{ title: 'Облігації Технобуд Інвест', category: 'Будівництво', target: '₴1 200 000' },
		{ title: 'Частка в МедФінанс Груп', category: 'Медицина', target: '₴800 000' },
		{ title: 'Проєкт ЕкоЕнергія Холдинг', category: 'Енергетика', target: '₴3 500 000' },
	];
}
