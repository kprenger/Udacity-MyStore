import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

import { Product } from '../models/product'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/api/products`)
  }

  getProduct(id: number | string): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/api/products/${id}`)
  }
}
