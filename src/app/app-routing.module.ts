import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { CartComponent } from './components/cart/cart.component'

const routes: Routes = [
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
