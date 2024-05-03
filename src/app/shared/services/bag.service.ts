import { Injectable } from '@angular/core';
import {ProductInfo} from "../interfaces/product-card.interface";

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor() {}
  productsInBag = new Map<string, { quantity: number; price: number }>();

  addProductsInBag(product: ProductInfo) {
    if(this.productsInBag.has(product.name) && this.productsInBag.get(product.name)!.quantity >= product.quantity) {
      return;
    }
    if (!this.productsInBag.has(product.name)) {
      this.productsInBag.set(product.name, {quantity: 1, price: product.price})
    } else {
      this.productsInBag.set(product.name, {
        quantity: this.productsInBag.get(product.name)!.quantity + 1,
        price: product.price
      })
    }
  }

  deleteProductsFromBag(product: ProductInfo) {
    if(this.productsInBag.get(product.name)?.quantity === 1) {
      this.productsInBag.delete(product.name)
    } else {
      this.productsInBag.set(product.name, {quantity: this.productsInBag.get(product.name)!.quantity - 1, price: product.price})
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
