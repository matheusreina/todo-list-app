import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent implements OnInit {
  // FA Icons start
  faTrash = faTrashCan;
  faPenToSquare = faPenToSquare;
  // FA Icons end

  isDarkMode: boolean = false;
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.classToggled.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  isChecked: boolean = false;
  onCheckedboxChange() {
    this.isChecked = !this.isChecked;
  }

  @Input() note: string = '';
  @Input() noteId: string = '';
}
