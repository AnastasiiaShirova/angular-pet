import { Routes } from '@angular/router';
import {ClientComponent} from "./components/client/client.component";
import {SellerComponent} from "./components/seller/seller.component";
import {orderGuard} from "./shared/guards/order.guard";
import {LoginComponent} from "./components/login/login.component";
import {loginGuard} from "./shared/guards/login.guard";

export const routes: Routes = [
  { path: 'login',
    component: LoginComponent},
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: 'seller',
    component: SellerComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'order',
    loadComponent: () => import('./components/order/order.component').then(m => m.OrderComponent),
    canDeactivate: [orderGuard],
  },
  {
    path: '**',
    component: ClientComponent,
  }
];
