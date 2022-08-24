import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RecordFormService {
  constructor() {}
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    age: new FormControl(null),
  });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      age: null
    });
  }
}
