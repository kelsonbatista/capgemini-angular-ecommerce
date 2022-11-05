import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProdutoCarrinho[] = [];

  constructor() { }

  getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }

  addToCart(produto: IProdutoCarrinho) {
    this.items.push(produto);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  deleteCartItem(produtoId: number) {
    console.log(`produto id cart service: ${produtoId}`);
    console.log(this.items);
    this.items = this.items.filter(item => item.id != produtoId);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  deleteCart() {
    this.items = [];
    localStorage.removeItem("cart");
  }
}
