import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iauthors } from '../interfaces/authors/interface';
@Injectable({
  providedIn: 'root'
})
export class AuthorsStateService {

  constructor() { }

  // $authorsState: BehaviorSubject<Iauthors[]> = new BehaviorSubject<Iauthors[]>([])

  authorsState: Iauthors[] = []
}
