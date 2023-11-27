import { Component } from '@angular/core';
import { window } from 'rxjs';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-authors-table',
  templateUrl: './authors-table.component.html',
  styleUrls: ['./authors-table.component.css'],
})
export class AuthorsTableComponent {
  constructor(public authors: StateService) {}
  public window = window
}
