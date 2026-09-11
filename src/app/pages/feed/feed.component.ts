import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateService } from '@wawjs/ngx-translate';

interface FeedItemPlaceholder {
	title: string;
	source: string;
	date: string;
}

@Component({
	selector: 'app-feed',
	imports: [],
	templateUrl: './feed.component.html',
	styleUrl: './feed.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedPageComponent {
	readonly translateService = inject(TranslateService);

	readonly items: FeedItemPlaceholder[] = [
		{ title: 'АгроКапітал відкрив новий раунд фінансування', source: 'Компанії', date: '10.09.2026' },
		{ title: 'Радниця Олена Ковальчук приєдналась до Finance', source: 'Радники', date: '08.09.2026' },
		{ title: 'Нова інвестиційна можливість у сфері енергетики', source: 'Інвестиції', date: '05.09.2026' },
	];
}
