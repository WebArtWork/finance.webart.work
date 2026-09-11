import { Component, computed, inject } from '@angular/core';
import { TranslateService } from '@wawjs/ngx-translate';
import { NavIconComponent } from '../../shared/nav-icon/nav-icon.component';
import { SidebarService } from '../sidebar/sidebar.service';

/**
 * Mobile-only (`max-md:`) bottom tab bar replacing the topbar's nav icons and
 * the sidebar's core browsing items, so they stay reachable without opening
 * the burger/sidebar overlay. Rendered from `UserComponent`, hidden at `md:`
 * and up where the topbar/sidebar keep their existing desktop behavior.
 */
@Component({
	selector: 'layout-mobile-nav',
	templateUrl: './mobile-nav.component.html',
	imports: [NavIconComponent],
})
export class MobileNavComponent {
	readonly translateService = inject(TranslateService);
	private readonly _sidebarService = inject(SidebarService);

	readonly menuIcon = computed(() =>
		this._sidebarService.mobileOpen() ? 'times' : 'bars',
	);

	onMenuClick(): void {
		this._sidebarService.burgerClick();
	}
}
