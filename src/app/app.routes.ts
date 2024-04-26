import { Routes } from '@angular/router';
import {ClientComponent} from "./components/client/client.component";
import {SellerComponent} from "./components/seller/seller.component";
import {OrderComponent} from "./components/order/order.component";

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
    component: OrderComponent,
  },
  {
    path: '**',
    component: ClientComponent,
  }
];
