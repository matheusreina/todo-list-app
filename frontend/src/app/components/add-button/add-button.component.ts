import { Component, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from 'stream';
import { OpenWindowService } from '../../services/open-window.service';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss',
})
export class AddButtonComponent {
  constructor(private openWindowService: OpenWindowService) {}
  // FA icon Start
  faPlus = faPlus;
  // FA icon End

  openWindow() {
    this.openWindowService.openWindowComponent();
  }
}
