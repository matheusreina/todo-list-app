import { DarkModeService } from './../../services/dark-mode.service';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { get } from 'node:http';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  // FontAwesome Start
  faMagnifyingGlass = faMagnifyingGlass;
  faDarkMode = faMoon;
  // FontAwesome End

  constructor(private darkModeService: DarkModeService) {}
  // Dark mode hangler
  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    let theme = document.body.classList.toggle('dark-mode');
    document.getElementById('search-bar-input')?.classList.toggle('dark-mode');
    document.getElementById('search-bar-btn')?.classList.toggle('dark-mode');

    if (theme) {
      this.faDarkMode = faSun;
    } else {
      this.faDarkMode = faMoon;
    }
  }
}
