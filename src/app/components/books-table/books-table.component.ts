import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css'],
})
export class BooksTableComponent {
  constructor(public books: StateService) {}
}
