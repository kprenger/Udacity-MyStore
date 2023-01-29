import { Component } from '@angular/core'
import { CartService } from '../../services/cart.service'

import { Product } from '../../models/product'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product
  quantity = 0

  constructor(private cartService: CartService) {
    this.product = new Product()
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.quantity)
    alert(`Adding ${this.quantity} ${this.product.name} to cart`)
  }
}
