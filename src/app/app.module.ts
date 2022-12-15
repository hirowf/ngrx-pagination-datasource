import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {AppComponent} from './app.component';
import {UsersMatSortComponent} from './users-mat-sort.component';
import {UsersComponent} from './users.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from "@angular/material/sort";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatProgressSpinnerModule,
      MatButtonToggleModule,
      MatOptionModule,
      MatSelectModule,
      MatSortModule,
      MatTabsModule,
      MatSelectModule
  ],
  declarations: [ AppComponent, UsersMatSortComponent, UsersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
