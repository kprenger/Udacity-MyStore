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

  constructor(private cartService: CartService) {
    this.cart = cartService.getCart()
  }

  removeItem(item: CartItem) {
    this.cart = this.cartService.removeFromCart(item.product)
  }
}
