import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { CartItem } from '../../models/cartItem'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: CartItem[]
  name = ''
  address = ''
  creditCardNumber!: number
  cartTotal = ''

  constructor(private cartService: CartService, private router: Router) {
    this.cart = []
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((res) => {
      this.cart = res.products
      this.updateCartTotal()
    })
  }

  updateCartTotal(): void {
    const total = this.cart.reduce(
      (sum: number, item: CartItem) =>
        (sum += item.product.price * item.quantity),
      0
    )

    this.cartTotal = (Math.round(total * 100) / 100).toFixed(2)
  }

  updateQuantity(item: CartItem): void {
    this.cartService
      .updateItemQuantity(item.product, item.quantity)
      .subscribe((res) => {
        this.cart = res.products
        this.updateCartTotal()
      })
  }

  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.product).subscribe((res) => {
      this.cart = res.products
      this.updateCartTotal()
      alert(`This will remove ${item.product.name} from your cart.`)
    })
  }

  submitForm(): void {
    this.cart = this.cartService.clearCart()
    this.router.navigate([
      '/confirmation',
      { name: this.name, total: this.cartTotal }
    ])
  }
}
