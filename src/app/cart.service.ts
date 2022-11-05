import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProdutoCarrinho[] = [];

  constructor() { }

  getCart() {
    return JSON.parse(localStorage.getItem("cart") || "");
  }

  addToCart(produto: IProdutoCarrinho) {
    this.items.push(produto);
    localStorage.setItem("cart", JSON.stringify(this.items))
  }

  deleteCart() {
    this.items = [];
    localStorage.removeItem("cart");
  }
}
