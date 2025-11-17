import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true
})
export class DashboardComponent {
  stats = [
    {
      title: 'کل درآمد',
      value: '50,000,000',
      icon: '📈',
      color: '#10b981'
    },
    {
      title: 'کل هزینه',
      value: '35,000,000',
      icon: '📉',
      color: '#ef4444'
    },
    {
      title: 'موجودی',
      value: '15,000,000',
      icon: '💰',
      color: '#3b82f6'
    },
    {
      title: 'تراکنش‌ها',
      value: '248',
      icon: '📊',
      color: '#f59e0b'
    }
  ];
}
