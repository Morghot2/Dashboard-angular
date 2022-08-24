import { Component, OnInit } from '@angular/core';
import { RecordFormService } from '../../shared/record-form.service';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit {

  constructor(public service: RecordFormService) { }

  ngOnInit(): void {
  }
  onClear() {
    this.service.form.reset();
  }

}