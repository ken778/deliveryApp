import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
    data: Product[] = [
      { id: 0, name: 'Cabbage', price: 19.99, amount: 0, img:"https://www.alpinist.in/wp-content/uploads/2020/08/cabbage-400x400.jpg"},
      { id: 1, name: 'Strawberry', price: 40.49, amount: 0, img:"https://hips.hearstapps.com/wdy.h-cdn.co/assets/cm/15/09/54ef81c0d714f_-_strawberry-coconut-scones-xl.jpg" },
      { id: 2, name: 'Banana', price: 4.99, amount: 0, img:"https://hips.hearstapps.com/wdy.h-cdn.co/assets/cm/15/09/54ef81c433ee4_-_banana-salsa-xln.jpg" },
      { id: 3, name: 'Mango', price: 17.99, amount: 0, img:"https://i.pinimg.com/originals/f8/75/bc/f875bc749e7a80cc8758ed337e1bff4e.jpg" },
      { id: 4, name: 'Butternut', price: 49.99, amount: 0, img:"https://edibleearthresources.com/wp-content/uploads/2018/10/Butternut-Squash-400x400.jpg"},
      { id: 5, name: 'Papaya', price: 19.99, amount: 0, img:"https://muvs.org/media/filer_public/ab/d4/abd4acfa-2d7c-4af9-8801-feabb7b12f4b/papaya_00_ma_verhuetung.jpg"},
      { id: 6, name: 'Carrots', price: 8.99, amount: 0, img:"https://i.pinimg.com/564x/5e/81/dc/5e81dce85871c9eeffbea1e5d7bf9221.jpg"},
      { id: 7, name: 'Tomatoes', price: 23.99, amount: 0, img:"https://bellavitashop.co.uk/1341-home_default/vine-tomatoes-500gr-350kg.jpg"},
      { id: 7, name: 'Potatoes', price: 69.99, amount: 0, img:"https://www.melissas.com/v/vspfiles/photos/130-2T.jpg"}
    
    ];

    private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }

}
