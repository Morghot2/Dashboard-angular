import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { RecordsTableDataSource } from './records-table-datasource';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RecordFormService } from '../../shared/record-form.service';

import {RECORD} from 'src/app/interfaces/Record'
import { RecordFormComponent } from '../record-form/record-form.component';

@Component({
  selector: 'app-records-table',
  templateUrl: './records-table.component.html',
  styleUrls: ['./records-table.component.css']
})
export class RecordsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<RECORD>;
  dataSource: RecordsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName', 'email', 'age', 'photo', 'actions',];

  constructor(public dialog: MatDialog, public service: RecordFormService) {
    this.dataSource = new RecordsTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  onCreate()  {
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(RecordFormComponent, dialogConfig)
  }
  onEdit(row: object){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(RecordFormComponent,dialogConfig);
  }
}
