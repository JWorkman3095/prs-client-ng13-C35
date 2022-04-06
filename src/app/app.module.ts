import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as core from './core/index';
import * as prs from './prs/index';
import { SortPipe } from './prs/sort.pipe';
import { BoolDisplayPipe } from './prs/bool-display.pipe';
import { ProductSearchPipe } from './prs/product/product-search.pipe';
import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { ProductDetailComponent } from './prs/product/product-detail/product-detail.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { ProductEditComponent } from './prs/product/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    core.HomeComponent, core.AboutComponent, core.E404Component,
    core.MenubarComponent, core.MenuitemComponent, 
    prs.UserListComponent, prs.UserDetailComponent, prs.UserCreateComponent, prs.UserEditComponent, 
    prs.UserLoginComponent, prs.UserSearchPipe, SortPipe, BoolDisplayPipe, 
    prs.VendorListComponent, prs.VendorDetailComponent, prs.VendorCreateComponent, prs.VendorEditComponent, 
    prs.VendorSearchPipe, ProductSearchPipe, ProductListComponent, ProductDetailComponent, ProductCreateComponent, ProductEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
