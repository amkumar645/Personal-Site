import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { ExpComponent } from './exp/exp.component';
import { ProjComponent } from './proj/proj.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProjDialogComponent } from './proj-dialog/proj-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExpComponent,
    ProjComponent,
    ProjDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
