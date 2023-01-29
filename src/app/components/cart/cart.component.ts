import { Component } from '@angular/core'

import { CartItem } from '../../models/cartItem'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: CartItem[]
  name = ''
  address = ''
  creditCardNumber = 0
  cartTotal = 0

  constructor(private cartService: CartService) {
    this.cart = []
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
    this.updateCartTotal()
  }

  updateCartTotal(): void {
    const total = this.cart.reduce(
      (sum: number, item: CartItem) =>
        (sum += item.product.price * item.quantity),
      0
    )

    this.cartTotal = Math.round(total * 100) / 100
  }

  updateQuantity(item: CartItem): void {
    this.cart = this.cartService.updateItemQuantity(item.product, item.quantity)
    this.updateCartTotal()
  }

  removeItem(item: CartItem): void {
    this.cart = this.cartService.removeFromCart(item.product)
  }

  submitForm(): void {
    this.cart = this.cartService.clearCart()
  }
}
