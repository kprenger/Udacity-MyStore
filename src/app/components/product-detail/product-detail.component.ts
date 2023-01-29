import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { CartService } from '../../services/cart.service'
import { Product } from '../../models/product'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product
  quantity = '0'

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.product = new Product()
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id')
    if (productId === null) {
      return
    }

    this.productService.getProduct(productId).subscribe((res) => {
      if (res) {
        this.product = res
      }
    })
  }

  addToCart(): void {
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
