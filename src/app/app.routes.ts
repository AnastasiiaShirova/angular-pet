import { Routes } from '@angular/router';
import {ClientComponent} from "./components/client/client.component";
import {SellerComponent} from "./components/seller/seller.component";

export const routes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: 'seller',
    component: SellerComponent,
  },
];
