import { Routes } from '@angular/router';
import {ClientComponent} from "./components/client/client.component";
import {SellerComponent} from "./components/seller/seller.component";
import {OrderComponent} from "./components/order/order.component";
import {orderGuard} from "./shared/guards/order.guard";

export const routes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: 'seller',
    component: SellerComponent,
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
