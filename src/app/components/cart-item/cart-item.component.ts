import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CartItem } from 'src/app/models/cartItem'
import { Product } from 'src/app/models/product'

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

  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter()

  remove(): void {
    this.removeItem.emit(this.cartItem)
  }
}
