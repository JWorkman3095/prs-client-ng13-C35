import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as core from './core/index';
import * as prs from './prs/index';
import { SortPipe } from './prs/sort.pipe';



@NgModule({
  declarations: [
    AppComponent,
    core.HomeComponent, core.AboutComponent, core.E404Component,
    core.MenubarComponent, core.MenuitemComponent, 
    prs.UserListComponent, prs.UserDetailComponent, prs.UserCreateComponent, prs.UserEditComponent, 
    prs.UserLoginComponent, prs.UserSearchPipe, SortPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
