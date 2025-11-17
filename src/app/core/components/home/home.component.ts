import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { TopHeaderComponent } from '../top-header/top-header.component';
import { BodyContentComponent } from '../body-content/body-content.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule,
    SideMenuComponent,
    TopHeaderComponent,
    BodyContentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {
  isMenuCollapsed = false;

  onMenuToggle(collapsed: boolean) {
    this.isMenuCollapsed = collapsed;
  }
}
