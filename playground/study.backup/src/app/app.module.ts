import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ChildDataComponent } from './child-data/child-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ParagraphComponent,
    ChildDataComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
