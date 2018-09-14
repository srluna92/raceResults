import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainModule } from './main/main.module';
import { RaceModule } from './race/race.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ResultsService } from './Services/results.service';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MainModule,
    RaceModule,
    MaterialModule
  ],
  providers: [ResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
