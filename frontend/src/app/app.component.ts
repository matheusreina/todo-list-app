import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontComponent } from './pages/front/front.component';
import { FloatingBoxComponent } from './components/floating-box/floating-box.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { OpenWindowService } from './services/open-window.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FontAwesomeModule,
    FrontComponent,
    FloatingBoxComponent,
    AddButtonComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isNewNoteWindowVisible = false;

  constructor(private openWindowService: OpenWindowService) {}

  ngOnInit() {
    this.openWindowService.openWindow$.subscribe(() => {
      this.isNewNoteWindowVisible = true;
    });
  }

  closeNewNoteWindow() {
    this.isNewNoteWindowVisible = false;
  }
}
