import { Component, Input } from '@angular/core'

import { Product } from '../../models/product'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product
  quantity = '0'

  constructor(private cartService: CartService) {
    this.product = new Product()
  }

  addToCart() {
    const success = this.cartService.addToCart(
      this.product,
      parseInt(this.quantity)
    )

    if (success) {
      alert(`Adding ${this.quantity} ${this.product.name} to cart`)
    } else {
      alert(`You have too many ${this.product.name} in your cart already!`)
    }
  }
}
