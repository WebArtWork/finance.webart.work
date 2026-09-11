import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateService } from '@wawjs/ngx-translate';

interface CompanyPlaceholder {
	name: string;
	industry: string;
	initials: string;
}

@Component({
	selector: 'app-companies',
	imports: [],
	templateUrl: './companies.component.html',
	styleUrl: './companies.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesPageComponent {
	readonly translateService = inject(TranslateService);

	readonly companies: CompanyPlaceholder[] = [
		{ name: 'АгроКапітал', industry: 'Сільське господарство', initials: 'АК' },
		{ name: 'Технобуд Інвест', industry: 'Будівництво', initials: 'ТІ' },
		{ name: 'МедФінанс Груп', industry: 'Медицина', initials: 'МГ' },
		{ name: 'ЕкоЕнергія Холдинг', industry: 'Відновлювана енергетика', initials: 'ЕХ' },
	];
}
