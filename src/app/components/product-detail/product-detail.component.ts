import { Component } from '@angular/core'

import { Product } from '../../models/product'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product
  quantity = 0

  constructor() {
    this.product = new Product()
  }

  addToCart() {
    alert(`Adding ${this.quantity} ${this.product.name} to cart`)
  }
}
