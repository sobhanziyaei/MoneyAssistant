import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-header',
  imports: [CommonModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss',
  standalone: true
})
export class TopHeaderComponent {
  userName = 'کاربر گرامی';
  userAvatar = 'https://ui-avatars.com/api/?name=User&background=667eea&color=fff&size=40';

  logout() {
    console.log('خروج از حساب کاربری');
    // Add logout logic here
  }
}
