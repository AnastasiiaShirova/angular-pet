import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ProductInfo} from "../interfaces/product-card.interface";

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor() {}
  productsInBag = new Map();
  addProductsInBag(product: ProductInfo) {
    if(!this.productsInBag.has(product.name)){
      this.productsInBag.set(product.name, {quantity: 1, price: product.price})
    } else {
      this.productsInBag.set(product.name, {quantity: this.productsInBag.get(product.name).quantity + 1, price: product.price})
    }
  }

  getTotalSum(){
    let sum = 0;
    for (const value of this.productsInBag.values()) {
      sum = sum + value.price * value.quantity;
    }
    return sum;
  }
}
