import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { LayoutClientComponent } from './components/layout-client/layout-client.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddProductComponent } from './pages/admin/products/add/add.component';
import { EditProductComponent } from './pages/admin/products/edit/edit.component';
import { adminGuard } from './admin.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [adminGuard],
    component: LayoutClientComponent,
    children: [
      { path: '', component: HomePageComponent },
      {
        path: 'home',
        redirectTo: '/',
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent,
      },
    ],
  },

  {
    path: 'admin',
    canActivate: [adminGuard],
    component: LayoutAdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'product-add',
        component: AddProductComponent,
      },
      { path: 'product-edit/:id', component: EditProductComponent },
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
