import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
