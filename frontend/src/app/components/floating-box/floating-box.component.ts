import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-floating-box',
  standalone: true,
  imports: [NgClass],
  templateUrl: './floating-box.component.html',
  styleUrl: './floating-box.component.scss',
})
export class FloatingBoxComponent implements OnInit {
  isDarkMode: boolean = false;
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.classToggled.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  @Output() close = new EventEmitter<void>();

  closeWindow() {
    this.close.emit();
  }
}
