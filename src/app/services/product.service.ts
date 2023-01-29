import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'

import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json')
  }

  getProduct(id: number | string): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products: Product[]) => {
        const idToCheck: number = typeof id === 'string' ? parseInt(id) : id
        return products.find((product) => product.id === idToCheck)
      })
    )
  }
}
