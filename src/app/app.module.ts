import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ModifyButtonComponent } from './components/modify-button/modify-button.component';
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
import { RecordFormService } from './shared/record-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MainPageComponent } from './components/main-page/main-page.component';
import {MatCardModule} from '@angular/material/card';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModifyButtonComponent,
    RecordsTableComponent,
    ModalComponent,
    LoginComponent,
    RegistrationComponent,
    RecordFormComponent,
    MainPageComponent
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
    ReactiveFormsModule,
    MatGridListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [RecordFormService],
  bootstrap: [AppComponent],
  entryComponents: [RecordFormComponent],
})
export class AppModule {}
