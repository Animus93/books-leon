import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorsStateService } from 'src/app/services/authors-state.service';

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.css']
})
export class AuthorsInputComponent {

  constructor(private authrosState: AuthorsStateService){}

  applayForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    surname: new FormControl('', [
      Validators.required
    ]),
    patronymic: new FormControl('', [
      Validators.required
    ]),
    birthDate: new FormControl('', [
      Validators.required
    ])

  })

  formSubmit(){
    console.log(this.applayForm.value)
    if(this.applayForm.value){
      // this.authrosState.authorsState.push(this.applayForm.value)
    }
  }
}
