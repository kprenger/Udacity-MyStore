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
    this.route.params.subscribe((params) => {
      const productId = params['id']
      console.log(params)
      if (productId !== null) {
        this.getProduct(productId)
      }
    })
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe((res) => {
      if (res) {
        this.product = res
      }
    })
  }

  addToCart(): void {
    this.cartService
      .addToCart(this.product, parseInt(this.quantity))
      .subscribe(() => {
        alert(`Adding ${this.quantity} ${this.product.name} to cart`)
      })
  }
}
