import { Component, OnInit } from '@angular/core';
import {RECORD} from "../../interfaces/Record";
import {Records} from "../../mockRecords"
import { DataSource } from '@angular/cdk/table';

import {MatTableModule} from '@angular/material/table';
@Component({

  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css']
})
export class RecordsListComponent implements OnInit {
  records: RECORD[] = Records;

  constructor() { }

  ngOnInit(): void {
  }

}
