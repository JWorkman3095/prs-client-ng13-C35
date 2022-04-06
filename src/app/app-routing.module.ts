import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as core from './core/index';
import * as prs from './prs/index';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "products/list", component: prs.ProductListComponent },
  { path: "products/create", component: prs.ProductCreateComponent },
  { path: "products/detail/:id", component: prs.ProductDetailComponent },
  { path: "products/edit/:id", component: prs.ProductEditComponent },

  { path: "requests/list", component: prs.RequestListComponent },
  { path: "requests/create", component: prs.RequestCreateComponent },
  { path: "requests/detail/:id", component: prs.RequestDetailComponent },
  { path: "requests/edit/:id", component: prs.RequestEditComponent },
  { path: "requests/lines/:id", component: prs.RequestLinesComponent },
  { path: "requests/reviews", component: prs.RequestReviewsComponent },
  { path: "requests/review/:id", component: prs.RequestReviewItemComponent },

  { path: "users/list", component: prs.UserListComponent },
  { path: "users/create", component: prs.UserCreateComponent },
  { path: "users/detail/:id", component: prs.UserDetailComponent },
  { path: "users/edit/:id", component: prs.UserEditComponent },
  { path: "login", component: prs.UserLoginComponent },

  { path: "vendors/list", component: prs.VendorListComponent },
  { path: "vendors/create", component: prs.VendorCreateComponent },
  { path: "vendors/detail/:id", component: prs.VendorDetailComponent },
  { path: "vendors/edit/:id", component: prs.VendorEditComponent },

  { path: "home", component: core.HomeComponent },
  { path: "about", component: core.AboutComponent },
  { path: "**", component: core.E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
