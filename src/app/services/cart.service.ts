import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

import { Cart } from '../models/cart'
import { CartItem } from '../models/cartItem'
import { Product } from '../models/product'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem[]

  constructor(private http: HttpClient) {
    this.cart = []
  }

  options = {
    headers: {
      Authorization: `Bearer ${environment.jwt}`
    }
  }

  getCart(): Observable<Cart> {
    return this.http.get<Cart>(
      `${environment.apiUrl}/api/users/1/orders/current`,
      this.options
    )
  }

  addToCart(product: Product, quantity: number): Observable<Cart> {
    const body = {
      productId: product.id,
      quantity: quantity
    }

    return this.http.post<Cart>(
      `${environment.apiUrl}/api/users/1/orders/add`,
      body,
      this.options
    )
  }

  updateItemQuantity(product: Product, quantity: number): Observable<Cart> {
    const body = {
      productId: product.id,
      quantity: quantity
    }

    return this.http.post<Cart>(
      `${environment.apiUrl}/api/users/1/orders/update`,
      body,
      this.options
    )
  }

  removeFromCart(product: Product): Observable<Cart> {
    const body = {
      productId: product.id
    }

    return this.http.post<Cart>(
      `${environment.apiUrl}/api/users/1/orders/remove`,
      body,
      this.options
    )
  }

  clearCart(): CartItem[] {
    this.cart = []
    return this.cart
  }
}
