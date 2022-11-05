import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: IProdutoCarrinho[] = [];
  total: number = 0;

  constructor(
    public cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.getTotal();
  }

  deleteCartItem(produtoId: number) {
    this.cartItems = this.cartItems.filter(item => item.id != produtoId);
    this.cartService.deleteCartItem(produtoId);
    this.getTotal();
  }

  getTotal() {
    this.total = this.cartItems.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  buyItNow() {
    alert("Parabéns! Compra realizada com sucesso!");
    this.cartService.deleteCart();
    this.router.navigate(["produtos"]);
  }

}
