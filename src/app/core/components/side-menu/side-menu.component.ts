import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  standalone: true
})
export class SideMenuComponent {
  @Output() toggleMenu = new EventEmitter<boolean>();
  isCollapsed = false;

  menuItems = [
    {
      label: 'داشبورد',
      icon: '📊',
      route: '/dashboard'
    },
    {
      label: 'دسته‌بندی هزینه‌ها',
      icon: '💰',
      route: '/categories'
    }
  ];

  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.toggleMenu.emit(this.isCollapsed);
  }
}
