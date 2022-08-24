import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RecordFormService {
  constructor() {}
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
  });
}
