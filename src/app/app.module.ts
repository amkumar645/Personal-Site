import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { ExpComponent } from './exp/exp.component';
import { ProjComponent } from './proj/proj.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjDialogComponent } from './proj-dialog/proj-dialog.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExpComponent,
    ProjComponent,
    ProjDialogComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* TO DEPLOY

COMMIT CHANGES
BUILD with ng build --prod --base-href "/"
RECOMMIT CHANGES?
Run npx angular-cli-ghpages --dir=dist/my-site
Go to Github and change domain name
*/