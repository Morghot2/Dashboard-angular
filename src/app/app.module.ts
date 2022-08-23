import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ModifyButtonComponent } from './components/modify-button/modify-button.component';
import { RecordItemComponent } from './components/record-item/record-item.component';
import { RecordsListComponent } from './components/records-list/records-list.component';
import { RecordsTableComponent } from './components/records-table/records-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RecordFormComponent } from './components/record-form/record-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModifyButtonComponent,
    RecordItemComponent,
    RecordsListComponent,
    RecordsTableComponent,
    ModalComponent,
    LoginComponent,
    RegistrationComponent,
    RecordFormComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
