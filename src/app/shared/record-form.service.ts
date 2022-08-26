import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from "lodash"

@Injectable({
  providedIn: 'root',
})
export class RecordFormService {
  constructor() {}
  form: FormGroup = new FormGroup({
    _id: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    age: new FormControl(null),
  });
  initializeFormGroup() {
    this.form.setValue({
      _id: null,
      firstName: '',
      lastName: '',
      email: '',
      age: null
    });
  }
  populateForm(record: object) {
    this.form.setValue(_.omit(record,['appUser', 'photo', 'createdAt', 'updatedAt', '__v']));
  }

}
