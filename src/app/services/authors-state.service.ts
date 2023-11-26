import { Injectable } from '@angular/core';
import { Iauthors } from '../interfaces/authors/interface';
@Injectable({
  providedIn: 'root',
})
export class AuthorsStateService {
  constructor() {}

  // $authorsState: BehaviorSubject<Iauthors[]> = new BehaviorSubject<Iauthors[]>([])

  authorsState: Iauthors[] = [];

  addAuthor(author: Iauthors) {
    console.log(this.authorsState.filter((item) => item === author));
    // console.log(author == author);
    // this.authorsState.map((item) => console.log(item === author));
    // console.log(this.authorsState.includes(author));
    this.authorsState.includes(author)
      ? alert('Такой автор уже существует в списке')
      : this.authorsState.push(author);
  }
}
