import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HistoryUserComponent } from './history-user/history-user.component';
import { HistoryService } from './history.service';
import { UserService } from './user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Globals } from './global';
@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HistoryUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HistoryService,
    UserService,
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
