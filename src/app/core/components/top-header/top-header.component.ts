import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss',
  standalone: true
})
export class TopHeaderComponent {
  searchQuery = '';

  onSearch() {
    console.log('Search:', this.searchQuery);
  }
}
