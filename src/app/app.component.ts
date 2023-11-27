import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Books-Leon';

  constructor(private authros: StateService) { }

  ngOnInit() {
    if (!this.authros.authorsState.length) {
      const localAuthors = localStorage.getItem('authors')
      if (localAuthors) {
        this.authros.authorsState = JSON.parse(localAuthors)
      }
    }
  }
}
