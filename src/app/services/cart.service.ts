import { Injectable } from '@angular/core'

import { CartItem } from '../models/cartItem'
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem[]

  constructor() {
    this.cart = []
  }

  getCart(): CartItem[] {
    console.log(this.cart)
    return this.cart
  }

  addToCart(product: Product, quantity: number): boolean {
    const existingCartItem = this.cart.find(
      (item) => item.product.id == product.id
    )

    if (existingCartItem) {
      const newQuantity = existingCartItem.quantity + quantity

      if (newQuantity > 8) {
        return false
      }

      existingCartItem.quantity = newQuantity
    } else {
      const newItem: CartItem = {
        quantity: quantity,
        product: product
      }
      this.cart.push(newItem)
    }

    return true
  }

  updateItemQuantity(product: Product, quantity: number): void {
    const existingCartItem = this.cart.find(
      (item) => (item.product.id = product.id)
    )

    if (existingCartItem) {
      existingCartItem.quantity = quantity
    }
  }

  removeFromCart(product: Product): CartItem[] {
    const existingCartItemIndex = this.cart.findIndex(
      (item) => item.product.id == product.id
    )

    if (existingCartItemIndex !== undefined) {
      this.cart.splice(existingCartItemIndex, 1)
    }

    return this.cart
  }
}
