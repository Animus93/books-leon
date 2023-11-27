import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-books-input',
  templateUrl: './books-input.component.html',
  styleUrls: ['./books-input.component.css']
})
export class BooksInputComponent {

  constructor(public state: StateService) { }
  isValidate: boolean = false;

  applayForm = new FormGroup({
    author: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.minLength(4), Validators.maxLength(4), Validators.required]),
  });

  checkField(field: string): boolean {
    if (
      this.applayForm.get(`${field}`)?.invalid &&
      (this.applayForm.get(`${field}`)?.dirty ||
        this.applayForm.get(`${field}`)?.touched ||
        this.isValidate)
    ) {
      return true;
    }
    return false;
  }

  formSubmit() {
    if (this.applayForm.valid) {
      this.state.addBook(this.applayForm.getRawValue());
    }
    else {
      this.isValidate = true
    }
  }
}
