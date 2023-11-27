import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.css'],
})
export class AuthorsInputComponent {
  constructor(private authrosState: StateService) {}
  isValidate: boolean = false;

  applayForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    patronymic: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
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
    console.log(this.applayForm.value)
    if (this.applayForm.valid) {
      this.authrosState.addAuthor(this.applayForm.getRawValue());
    }
    else {
      this.isValidate = true
    }
  }
}
