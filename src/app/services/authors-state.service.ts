import { Injectable } from '@angular/core';
import { Iauthors } from '../interfaces/authors/interface';
@Injectable({
  providedIn: 'root',
})
export class AuthorsStateService {
  constructor() {}

  authorsState: Iauthors[] = [];
}
