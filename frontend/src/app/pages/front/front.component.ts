import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { NotesComponent } from '../../components/notes/notes.component';
import { EmptyImageComponent } from '../../components/empty-image/empty-image.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-front',
  standalone: true,
  imports: [
    SearchBarComponent,
    NotesComponent,
    EmptyImageComponent,
    NgFor,
    NgIf,
  ],
  templateUrl: './front.component.html',
  styleUrl: './front.component.scss',
})
export class FrontComponent {
  public notes = ['NOTE #1', 'NOTE #2', 'NOTE #3', 'NOTE #4'];
  // public notes = [];

  checkEmpty(): boolean {
    if (this.notes.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty: boolean = this.checkEmpty();
}
