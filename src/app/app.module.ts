import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ModifyButtonComponent } from './components/modify-button/modify-button.component';
import { RecordItemComponent } from './components/record-item/record-item.component';
import { RecordsListComponent } from './components/records-list/records-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModifyButtonComponent,
    RecordItemComponent,
    RecordsListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
