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
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    },
    {
      label: 'People',
      icon: 'people',
      route: '/people'
    },
    {
      label: 'Projects',
      icon: 'folder',
      route: '/projects'
    },
    {
      label: 'Calendar',
      icon: 'calendar_today',
      route: '/calendar'
    },
    {
      label: 'Training',
      icon: 'school',
      route: '/training'
    },
    {
      label: 'Timesheet',
      icon: 'access_time',
      route: '/timesheet'
    },
    {
      label: 'Reports',
      icon: 'assessment',
      route: '/reports'
    },
    {
      label: 'Administration',
      icon: 'settings',
      route: '/administration'
    },
    {
      label: 'Help',
      icon: 'help_outline',
      route: '/help'
    }
  ];

  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.toggleMenu.emit(this.isCollapsed);
  }
}
