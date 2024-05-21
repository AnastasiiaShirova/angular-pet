import {CanDeactivateFn} from '@angular/router';
import {OrderComponent} from "../../components/order/order.component";

export const orderGuard: CanDeactivateFn<any> = (component: OrderComponent) => {
  if(!component.isMadeOrder) {
    return confirm("Отменить заказ?")
  }
  return true;
};
