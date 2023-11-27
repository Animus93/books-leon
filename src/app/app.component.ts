import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Books-Leon';

  constructor(private state: StateService) {}

  ngOnInit() {
    if (!this.state.authorsState.length) {
      const localAuthors = localStorage.getItem('authors');
      if (localAuthors) {
        this.state.authorsState = JSON.parse(localAuthors);
      }
    }
    if (!this.state.booksState.length) {
      const localBooks = localStorage.getItem('books');
      if (localBooks) {
        this.state.booksState = JSON.parse(localBooks);
      }
    }
  }
}
