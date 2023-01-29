import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Observable, switchMap } from 'rxjs'

import { CartService } from '../../services/cart.service'
import { Product } from '../../models/product'
import { ProductService } from 'src/app/services/product.service'

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

  ngOnInit() {
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
