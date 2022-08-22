import { Component, OnInit, Input } from '@angular/core';
import {RECORD} from "../../interfaces/Record";


import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
  styleUrls: ['./record-item.component.css']
})
export class RecordItemComponent implements OnInit {
  @Input() record!: RECORD

  constructor() { }

  ngOnInit(): void {
  }

}
 