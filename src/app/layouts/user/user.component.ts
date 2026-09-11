import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarService } from '../sidebar/sidebar.service';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
	templateUrl: './user.component.html',
	styleUrl: './user.component.scss',
	imports: [RouterOutlet, TopbarComponent, SidebarComponent, MobileNavComponent],
})
export class UserComponent {
	readonly sidebar = inject(SidebarService);
}
