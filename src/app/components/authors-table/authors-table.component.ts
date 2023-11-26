import { Component } from '@angular/core';
import { AuthorsStateService } from 'src/app/services/authors-state.service';

@Component({
  selector: 'app-authors-table',
  templateUrl: './authors-table.component.html',
  styleUrls: ['./authors-table.component.css'],
})
export class AuthorsTableComponent {
  constructor(public authors: AuthorsStateService) {}
}
