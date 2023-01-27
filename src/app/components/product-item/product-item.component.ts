import { Component, Input } from '@angular/core'

import { Product } from 'src/app/models/product'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product
  quantity = 0

  constructor() {
    this.product = new Product()
  }

  addToCart() {
    alert(`Adding ${this.quantity} ${this.product.name} to cart`)
  }
}
