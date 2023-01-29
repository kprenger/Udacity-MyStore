import { Component, EventEmitter, Input, Output } from '@angular/core'

import { CartItem } from '../../models/cartItem'
import { Product } from '../../models/product'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem: CartItem

  constructor() {
    this.cartItem = { quantity: 0, product: new Product() }
  }

  @Output() updateQuantity: EventEmitter<CartItem> = new EventEmitter()
  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter()

  update(): void {
    this.updateQuantity.emit(this.cartItem)
  }

  remove(): void {
    this.removeItem.emit(this.cartItem)
  }
}
