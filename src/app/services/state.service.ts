import { Injectable } from '@angular/core';
import { Iauthors } from '../interfaces/authors.interface';
import { Ibooks } from '../interfaces/books.interface';
@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor() { }

  authorsState: Iauthors[] = [];
  booksState: Ibooks[] = [];

  sortBooksField: string = ''

  addBook(book: Ibooks) {
    const isDouble = this.booksState.some(function (booksItem) {
      return booksItem.author === book.author && booksItem.title === book.title && booksItem.publisher === book.publisher && booksItem.year === book.year
    })
    isDouble ? alert('автор с такими данными уже сущестует') : this.booksState.push(book) && localStorage.setItem('books', JSON.stringify(this.booksState))
  }

  getSortedBooksState(field: string): Ibooks[] {

    return this.booksState.sort((a: Ibooks, b: Ibooks): any => {
      // @ts-ignore
      field === this.sortBooksField ? (a.field < b.field ? 1 : -1) && (this.sortBooksField = '') : (a.field > b.field ? 1 : -1) && (this.sortBooksField = field)
    })
  }

  addAuthor(author: Iauthors) {
    const isDouble = this.authorsState.some(function (authorsItem) {
      return authorsItem.birthDate === author.birthDate && authorsItem.name === author.name && authorsItem.patronymic === author.patronymic && authorsItem.surname === author.surname
    })
    isDouble ? alert('автор с такими данными уже сущестует') : this.authorsState.push(author) && localStorage.setItem('authors', JSON.stringify(this.authorsState))
  }

  getSortedAuthorsState(): Iauthors[] {
    //@ts-ignore
    return this.authorsState.sort((a, b) => a.surname > b.surname ? 1 : -1)
  }
}
