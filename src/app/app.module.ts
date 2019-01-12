import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';


import { MatNativeDateModule,MatDatepickerModule,MatInputModule} from '@angular/material/';
import { DatepickerOverviewExampleComponent } from './datepicker-overview-example/datepicker-overview-example.component';





@NgModule({
  declarations: [
    AppComponent,
    DatepickerOverviewExampleComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatNativeDateModule,MatDatepickerModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



